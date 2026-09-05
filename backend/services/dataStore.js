const User = require('../models/User');
const Scheme = require('../models/Scheme');
const ChannelPartner = require('../models/ChannelPartner');
const Application = require('../models/Application');
const { isInMemoryFallback } = require('../config/db');

const { COMPREHENSIVE_GOVT_SCHEMES } = require('../data/comprehensiveSchemes');

// In-Memory storage repositories
const memoryDB = {
  users: [],
  schemes: [...COMPREHENSIVE_GOVT_SCHEMES.map((s, idx) => ({ _id: `65e0000000000000000000${(20 + idx).toString()}`, ...s }))],
  partners: [],
  applications: []
};

// Helper Haversine distance calculator in kilometers
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(2));
}

const dataStore = {
  memoryDB,

  // Schemes
  async getSchemes(filter = {}) {
    if (!isInMemoryFallback()) {
      try {
        const schemes = await Scheme.find(filter);
        if (schemes && schemes.length > 0) {
          // Enrich MongoDB schemes with vernacularDetails from in-memory store if missing
          return schemes.map(s => {
            if (!s.vernacularDetails || Object.keys(s.vernacularDetails || {}).length === 0) {
              const inMemScheme = memoryDB.schemes.find(m => 
                (m.shortCode && m.shortCode === s.shortCode) ||
                (m.schemeId && m.schemeId === s.schemeId) ||
                (m.schemeName && m.schemeName === s.schemeName)
              );
              if (inMemScheme && inMemScheme.vernacularDetails) {
                // Return a plain object with vernacularDetails merged in
                const schemeObj = s.toObject ? s.toObject() : { ...s };
                return { ...schemeObj, vernacularDetails: inMemScheme.vernacularDetails };
              }
            }
            return s;
          });
        }
      } catch (e) {
        console.warn('Falling back to in-memory schemes:', e.message);
      }
    }
    return memoryDB.schemes.filter(s => {
      if (filter.category && s.category !== filter.category) return false;
      if (filter.targetSector && s.targetSector !== filter.targetSector) return false;
      return true;
    });
  },

  async getSchemesByBusinessType(businessType) {
    const all = await this.getSchemes();
    if (!businessType || businessType === 'All') return all;
    return all.filter(s =>
      s.eligibleBusinessTypes && (
        s.eligibleBusinessTypes.includes('All') ||
        s.eligibleBusinessTypes.includes(businessType)
      )
    );
  },

  getBusinessTypesCatalog() {
    return [
      'Food Business',
      'Retail / Kirana Shop',
      'Handicrafts & Handlooms',
      'Agriculture & Allied',
      'Textile & Garments',
      'Manufacturing & Fabrication',
      'Services / Repair Shop',
      'Street Vending'
    ];
  },

  async getSchemeById(id) {
    if (!id) return null;
    const cleanId = id.toString().trim();
    const cleanIdLower = cleanId.toLowerCase();

    if (!isInMemoryFallback()) {
      try {
        const scheme = await Scheme.findById(cleanId);
        if (scheme) return scheme;
      } catch (e) {
        // Continue to in-memory check
      }
    }

    // 1. Exact match by _id, shortCode, or schemeId
    let found = memoryDB.schemes.find(s => {
      if (!s) return false;
      const sId = s._id ? s._id.toString() : '';
      const sCode = (s.shortCode || '').toLowerCase();
      const sSchemeId = (s.schemeId || '').toLowerCase();
      return sId === cleanId || (sCode && sCode === cleanIdLower) || (sSchemeId && sSchemeId === cleanIdLower);
    });
    if (found) return found;

    // 2. Exact match by schemeName
    found = memoryDB.schemes.find(s => {
      if (!s) return false;
      const sName = (s.schemeName || '').toLowerCase();
      return sName && sName === cleanIdLower;
    });
    if (found) return found;

    // 3. Substring match on schemeName or cleanId
    found = memoryDB.schemes.find(s => {
      if (!s) return false;
      const sName = (s.schemeName || '').toLowerCase();
      const sCode = (s.shortCode || '').toLowerCase();
      const sSchemeId = (s.schemeId || '').toLowerCase();
      return (
        (sName && cleanIdLower.length >= 3 && sName.includes(cleanIdLower)) ||
        (sName && cleanIdLower.length >= 3 && cleanIdLower.includes(sName)) ||
        (sCode && sCode.length >= 3 && cleanIdLower.includes(sCode)) ||
        (sSchemeId && sSchemeId.length >= 3 && cleanIdLower.includes(sSchemeId))
      );
    });

    return found || null;
  },

  async addScheme(schemeData) {
    const id = schemeData._id || 'sch_' + Math.random().toString(36).substring(2, 9);
    const item = { ...schemeData, _id: id };
    memoryDB.schemes.push(item);

    if (!isInMemoryFallback()) {
      try {
        await Scheme.create(schemeData);
      } catch (e) {
        // silent
      }
    }
    return item;
  },

  // Users
  async getUser(id) {
    if (!id) return null;
    const idStr = id.toString().trim();
    if (!isInMemoryFallback()) {
      try {
        let user = null;
        if (idStr.match(/^[0-9a-fA-F]{24}$/)) {
          user = await User.findById(idStr);
        }
        if (!user) {
          user = await User.findOne({
            $or: [{ phone: idStr }, { email: idStr }, { _id: idStr }]
          });
        }
        if (user) return user.toObject ? user.toObject() : user;
      } catch (e) {}
    }
    return memoryDB.users.find(u => 
      (u._id && u._id.toString() === idStr) || 
      (u.phone && u.phone === idStr) ||
      (u.email && u.email.toLowerCase() === idStr.toLowerCase())
    ) || null;
  },

  async saveUser(userData) {
    const id = userData._id || 'usr_' + Math.random().toString(36).substring(2, 9);
    const existingIndex = memoryDB.users.findIndex(u => 
      (userData._id && u._id && u._id.toString() === userData._id.toString()) || 
      (userData.phone && u.phone && u.phone === userData.phone) ||
      (userData.email && u.email && u.email.toLowerCase() === userData.email.toLowerCase())
    );
    
    let user;
    if (existingIndex >= 0) {
      memoryDB.users[existingIndex] = { ...memoryDB.users[existingIndex], ...userData };
      user = memoryDB.users[existingIndex];
    } else {
      user = { ...userData, _id: id };
      memoryDB.users.push(user);
    }

    if (!isInMemoryFallback()) {
      try {
        const mongoPayload = { ...userData };
        const hasValidObjectId = mongoPayload._id && mongoPayload._id.toString().match(/^[0-9a-fA-F]{24}$/);
        if (!hasValidObjectId) {
          delete mongoPayload._id;
        }

        let filter = null;
        if (hasValidObjectId) {
          filter = { _id: userData._id };
        } else if (mongoPayload.phone) {
          filter = { phone: mongoPayload.phone };
        } else if (mongoPayload.email) {
          filter = { email: mongoPayload.email };
        }

        if (filter) {
          const dbUser = await User.findOneAndUpdate(
            filter,
            { $set: mongoPayload },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          if (dbUser) return dbUser.toObject ? dbUser.toObject() : dbUser;
        } else {
          const dbUser = await User.create(mongoPayload);
          if (dbUser) return dbUser.toObject ? dbUser.toObject() : dbUser;
        }
      } catch (e) {
        console.warn('MongoDB saveUser error, continuing with memoryDB:', e.message);
      }
    }
    return user;
  },

  // Partners
  async getNearbyPartners(lat, lng, radiusKm = 25, typeFilter = null, locationName = null) {
    let dbPartnersList = [];
    if (!isInMemoryFallback()) {
      try {
        const query = {
          location: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates: [parseFloat(lng), parseFloat(lat)]
              },
              $maxDistance: radiusKm * 1000
            }
          }
        };
        if (typeFilter && typeFilter !== 'All') query.type = typeFilter;
        const dbPartners = await ChannelPartner.find(query);
        if (dbPartners && dbPartners.length > 0) {
          dbPartnersList = dbPartners.map(p => {
            const partnerObj = p.toObject();
            partnerObj.distanceKm = calculateHaversineDistance(lat, lng, p.location.coordinates[1], p.location.coordinates[0]);
            return partnerObj;
          });
        }
      } catch (e) {
        // Fall back to memory with Haversine formula
      }
    }

    // Dynamic Live Spatial POI Discovery (OpenStreetMap Overpass + Reverse Geocoded Anchor Points)
    try {
      const partnerLocator = require('./partnerLocatorService');
      const dynamicPartners = await partnerLocator.getDynamicNearbyPartners(lat, lng, radiusKm, typeFilter, locationName);
      
      // Merge MongoDB partners and dynamic live partners (deduplicating by name)
      const combined = [...dbPartnersList];
      for (const dp of dynamicPartners) {
        if (!combined.some(cp => cp.partnerName.toLowerCase() === dp.partnerName.toLowerCase())) {
          combined.push(dp);
        }
      }
      return combined.sort((a, b) => a.distanceKm - b.distanceKm);
    } catch (err) {
      console.warn('Dynamic partner locator fallback error:', err.message);
    }

    // In-memory spatial Haversine query fallback
    let filtered = memoryDB.partners;
    if (typeFilter && typeFilter !== 'All') {
      filtered = filtered.filter(p => p.type === typeFilter);
    }

    const calculated = filtered.map(partner => {
      const pLng = partner.location.coordinates[0];
      const pLat = partner.location.coordinates[1];
      const dist = calculateHaversineDistance(lat, lng, pLat, pLng);
      return {
        ...partner,
        distanceKm: dist
      };
    });

    return calculated
      .filter(p => p.distanceKm <= radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm);
  },

  async addPartner(partnerData) {
    const id = partnerData._id || 'ptn_' + Math.random().toString(36).substring(2, 9);
    const item = { ...partnerData, _id: id };
    memoryDB.partners.push(item);
    if (!isInMemoryFallback()) {
      try {
        await ChannelPartner.create(partnerData);
      } catch (e) {}
    }
    return item;
  },

  // Applications
  async getApplications(userId = null) {
    if (!isInMemoryFallback()) {
      try {
        const query = userId ? { userId } : {};
        const apps = await Application.find(query).populate('schemeId').populate('assignedPartnerId');
        if (apps && apps.length > 0) return apps;
      } catch (e) {}
    }
    return memoryDB.applications.filter(a => !userId || a.userId.toString() === userId.toString());
  },

  async createApplication(appData) {
    const id = appData._id || 'app_' + Math.random().toString(36).substring(2, 9);
    const item = {
      _id: id,
      trackingId: 'UDS-' + Math.floor(100000 + Math.random() * 900000),
      status: 'Submitted',
      createdAt: new Date(),
      ...appData
    };
    memoryDB.applications.push(item);
    if (!isInMemoryFallback()) {
      try {
        await Application.create(appData);
      } catch (e) {}
    }
    return item;
  }
};

module.exports = dataStore;
