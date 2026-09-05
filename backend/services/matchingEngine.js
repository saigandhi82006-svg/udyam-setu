/**
 * Udyam Setu - Deterministic Rule-Based Scheme Matching Engine
 * SIH Problem Statement ID: 92
 * 
 * Strict & exact demographic, sectoral, financial, and age-based matching.
 */

function matchSchemesForUser(userProfile, allSchemes) {
  const {
    age = 28,
    category = 'General',
    annualIncome = 0,
    neededInvestment = 0,
    investmentAmount = 0,
    businessType = 'Food Business',
    experienceYears = 0,
    gender = 'Male',
    hasDisability = false,
    disabilityType = 'None',
    disabilityPercentage = 'None',
    hasUdidCard = false,
    locationType = 'Rural',
    education = '8th Pass or Above'
  } = userProfile;

  const targetInvestment = Number(neededInvestment || investmentAmount || 0);
  const userAge = Number(age) || 0;
  const userIncome = Number(annualIncome) || 0;

  const isDivyangjan = hasDisability === true || 
    hasDisability === 'Yes' || 
    String(hasDisability).toLowerCase() === 'true' || 
    category === 'Differently Abled (Divyangjan)' ||
    (disabilityType && disabilityType !== 'None' && disabilityType.trim() !== '');

  const isWomen = (gender && gender.toLowerCase() === 'female') || 
    (category && category.toLowerCase().includes('women'));

  const isSC_ST = category === 'SC' || category === 'ST';
  const isMinority = category === 'Minority';
  const isRural = (locationType || 'Rural').toLowerCase().includes('rural');

  const results = [];

  for (const scheme of allSchemes) {
    const reasons = [];
    const bonuses = [];

    // --- Hard Rule 1: Age Check ---
    const minAge = scheme.minAge || 18;
    const maxAge = scheme.maxAge || 75;
    if (userAge > 0) {
      if (userAge < minAge || userAge > maxAge) {
        continue; // Disqualified by strict age criteria
      }
      reasons.push(`Meets required age criteria (${minAge}-${maxAge} yrs, applicant is ${userAge} yrs)`);
    }

    // --- Hard Rule 2: Income Ceiling Check ---
    if (scheme.maxIncome && scheme.maxIncome > 0 && userIncome > 0) {
      if (userIncome > scheme.maxIncome) {
        continue; // Disqualified by income ceiling
      }
      reasons.push(`Income ₹${userIncome.toLocaleString('en-IN')} is within ceiling of ₹${scheme.maxIncome.toLocaleString('en-IN')}`);
    }

    // --- Hard Rule 3: Affirmative Demographics & Social Category Check ---
    const eligibleCats = scheme.eligibleCategories || ['All'];
    const isUniversalCategory = eligibleCats.includes('All');

    // Strict exclusive checks:
    // A. Disability-only scheme (e.g. NHFDC-DSY)
    const isDivyangOnlyScheme = eligibleCats.length === 1 && 
      (eligibleCats[0].toLowerCase().includes('divyang') || eligibleCats[0].toLowerCase().includes('differently'));
    if (isDivyangOnlyScheme && !isDivyangjan) {
      continue; // Exclude non-disabled applicants from 100% Divyangjan schemes
    }

    // B. Women-only scheme (e.g. Mahila Coir Yojana MCY)
    const isWomenOnlyScheme = eligibleCats.length === 1 && 
      eligibleCats[0].toLowerCase().includes('women');
    if (isWomenOnlyScheme && !isWomen) {
      continue; // Exclude male applicants from women-only schemes
    }

    // C. SC/ST and Women only scheme (e.g. Stand-Up India)
    if (scheme.shortCode === 'STAND-UP' && !isWomen && !isSC_ST) {
      continue; // Stand-Up India is strictly for SC/ST or Women
    }

    // Category eligibility test:
    const isCategoryEligible = isUniversalCategory ||
      eligibleCats.includes(category) ||
      (isWomen && eligibleCats.some(c => c.toLowerCase().includes('women'))) ||
      (isDivyangjan && eligibleCats.some(c => c.toLowerCase().includes('differently') || c.toLowerCase().includes('divyang'))) ||
      (isSC_ST && eligibleCats.some(c => c === 'SC' || c === 'ST' || c === 'Marginalized')) ||
      (isMinority && eligibleCats.some(c => c.toLowerCase().includes('minority')));

    if (!isCategoryEligible) {
      continue; // Disqualified by social category
    }
    reasons.push(`Eligible under ${category || 'General'} social category`);

    // --- Hard Rule 4: Strict Business Sector Match ---
    const eligibleBusinesses = scheme.eligibleBusinessTypes || ['All'];
    let isBusinessEligible = false;

    // Special case: Universal disability empowerment scheme applies across all micro sectors
    if (scheme.shortCode === 'NHFDC-DSY' && isDivyangjan) {
      isBusinessEligible = true;
    } else if (businessType) {
      const bTypeLower = businessType.toLowerCase().trim();
      isBusinessEligible = eligibleBusinesses.some(eb => {
        const ebLower = eb.toLowerCase().trim();
        if (ebLower === bTypeLower) return true;
        if (bTypeLower.includes('food') && ebLower.includes('food')) return true;
        if (bTypeLower.includes('retail') && (ebLower.includes('retail') || ebLower.includes('kirana'))) return true;
        if (bTypeLower.includes('street') && (ebLower.includes('street') || ebLower.includes('vending'))) return true;
        if (bTypeLower.includes('handicraft') && (ebLower.includes('handicraft') || ebLower.includes('handloom') || ebLower.includes('artisan'))) return true;
        if (bTypeLower.includes('agriculture') && (ebLower.includes('agriculture') || ebLower.includes('allied') || ebLower.includes('farmer'))) return true;
        if (bTypeLower.includes('textile') && (ebLower.includes('textile') || ebLower.includes('garment') || ebLower.includes('apparel'))) return true;
        if (bTypeLower.includes('manufacturing') && (ebLower.includes('manufacturing') || ebLower.includes('fabrication') || ebLower.includes('industry'))) return true;
        if (bTypeLower.includes('service') && (ebLower.includes('service') || ebLower.includes('repair'))) return true;
        if (bTypeLower.includes('education') && (ebLower.includes('education') || ebLower.includes('student'))) return true;
        return false;
      });
    } else {
      isBusinessEligible = true;
    }

    if (!isBusinessEligible) {
      continue; // Strictly disqualified: business sector does not match scheme domain
    }
    reasons.push(`Tailored specifically for ${businessType} enterprise`);

    // --- Hard Rule 5: Investment / Loan Amount Compatibility ---
    if (targetInvestment > 0) {
      // If scheme requires minimum investment (e.g. ₹10L for Stand-Up, ₹10L for AIF, ₹5L for CGTMSE)
      if (scheme.minGrantLoanAmount && targetInvestment < scheme.minGrantLoanAmount) {
        continue; // Disqualified: requested loan is below scheme's minimum threshold
      }

      // If scheme has a maximum grant/loan cap that is far too low for the project
      // (e.g. asking ₹20 Lakhs for a ₹50,000 street vendor micro-loan)
      if (scheme.maxGrantLoanAmount && targetInvestment > (scheme.maxGrantLoanAmount * 2.5)) {
        continue; // Disqualified: requested loan exceeds scheme maximum cap
      }
      reasons.push(`Loan requirement ₹${targetInvestment.toLocaleString('en-IN')} matches scheme lending limits`);
    }

    // --- Dynamic Match Score Computation (75% - 98%) ---
    let score = 75; // Base score for fulfilling all hard requirements

    const isPrimaryExact = scheme.primaryBusinessType && 
      scheme.primaryBusinessType.toLowerCase().trim() === businessType.toLowerCase().trim();
    if (isPrimaryExact) {
      score += 10;
      bonuses.push(`Primary designated flagship scheme for ${businessType}`);
    }

    if (isDivyangjan) {
      if (scheme.shortCode === 'NHFDC-DSY') {
        score += 15;
        bonuses.push('100% Dedicated Divyangjan Swavalamban Priority Loan');
      } else if (scheme.shortCode === 'PMEGP' || scheme.shortCode === 'PMEGP-SERVICE') {
        score += 10;
        bonuses.push('Special 35% Capital Subsidy for Divyangjan Entrepreneurs');
      }
    }

    if (isWomen) {
      score += 6;
      bonuses.push('Women Entrepreneur priority quota & interest subvention');
    }

    if (isRural && (scheme.subsidyPercentage >= 25 || scheme.shortCode?.startsWith('PMEGP') || scheme.shortCode === 'PMFME')) {
      score += 5;
      bonuses.push('Rural location eligible for higher capital subsidy');
    }

    if (targetInvestment > 0 && scheme.maxGrantLoanAmount && targetInvestment <= scheme.maxGrantLoanAmount) {
      score += 4;
    }

    // Clamp score
    score = Math.min(98, Math.max(70, score));

    // Dynamic tag
    let highlightTag = 'Eligible Scheme';
    if (isDivyangjan && (scheme.shortCode === 'NHFDC-DSY' || scheme.shortCode === 'PMEGP')) {
      highlightTag = 'Divyangjan Priority (35% Subsidy)';
    } else if (score >= 90) {
      highlightTag = 'Best Match (90%+)';
    } else if (scheme.subsidyPercentage && scheme.subsidyPercentage >= 25) {
      highlightTag = `High Subsidy (${scheme.subsidyPercentage}%)`;
    } else if (scheme.tags && scheme.tags.length > 0) {
      highlightTag = scheme.tags[0];
    }

    results.push({
      scheme,
      matchPercentage: score,
      matchBadge: `${score}% Match`,
      highlightTag,
      eligibilityReasons: reasons,
      bonusFactors: bonuses
    });
  }

  // Sort descending by matchPercentage, prioritizing schemes whose primaryBusinessType matches user.businessType, then by maxGrantLoanAmount
  results.sort((a, b) => {
    const aPrimary = (a.scheme.primaryBusinessType && a.scheme.primaryBusinessType.toLowerCase() === businessType.toLowerCase()) ? 1 : 0;
    const bPrimary = (b.scheme.primaryBusinessType && b.scheme.primaryBusinessType.toLowerCase() === businessType.toLowerCase()) ? 1 : 0;
    if (bPrimary !== aPrimary) {
      return bPrimary - aPrimary;
    }
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }
    return (b.scheme.maxGrantLoanAmount || 0) - (a.scheme.maxGrantLoanAmount || 0);
  });

  return results;
}

module.exports = {
  matchSchemesForUser
};
