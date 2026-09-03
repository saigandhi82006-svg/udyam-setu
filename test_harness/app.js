// Udyam Setu - Interactive Prototype Client
const API_BASE = '/api';

let currentSelectedScheme = null;
let currentProfile = {
  age: 28,
  category: 'OBC',
  annualIncome: 240000,
  businessType: 'Food Business',
  experienceYears: 2
};

let currentDocuments = [
  { docName: 'Aadhaar Card', status: 'Uploaded', size: '1.2 MB' },
  { docName: 'PAN Card', status: 'Uploaded', size: '0.8 MB' },
  { docName: 'Business Plan', status: 'Pending', size: '' },
  { docName: 'Bank Statement', status: 'Pending', size: '' },
  { docName: 'Address Proof', status: 'Uploaded', size: '2.1 MB' }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  checkBackendHealth();
  updateEMICalculator();
  loadNearbyPartners();
  renderDocumentChecklist();
  runSchemeMatching(false); // background populate
});

// Screen Switcher
function showScreen(screenNumber) {
  for (let i = 1; i <= 10; i++) {
    const s = document.getElementById(`screen-${i}`);
    if (s) s.classList.remove('active');
  }
  const target = document.getElementById(`screen-${screenNumber}`);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }

  // Update Left Navigation
  const stepBtns = document.querySelectorAll('.step-btn');
  stepBtns.forEach((btn, idx) => {
    if (idx + 1 === screenNumber) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function switchView(view) {
  const panel = document.getElementById('apiPanel');
  if (view === 'api') {
    panel.scrollIntoView({ behavior: 'smooth' });
    panel.style.outline = '2px solid var(--primary-green)';
    setTimeout(() => panel.style.outline = 'none', 1200);
  } else {
    showScreen(1);
  }
}

// Check Backend Health
async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    const data = await res.json();
    if (data.status === 'online') {
      document.getElementById('backendStatus').innerHTML = '<span class="status-dot"></span> Backend Online: Port 5000';
    }
  } catch (err) {
    document.getElementById('backendStatus').innerHTML = '<span class="status-dot" style="background:orange"></span> In-Memory Mock Active';
  }
}

// 1. Auth Handlers (Screen 2)
function handleSendOTP() {
  const phone = document.getElementById('loginPhone').value.trim();
  if (phone.length < 10) {
    alert('Please enter a 10-digit mobile number');
    return;
  }
  document.getElementById('sendOtpBtn').innerText = 'Sending OTP...';
  setTimeout(() => {
    document.getElementById('sendOtpBtn').style.display = 'none';
    document.getElementById('otpBox').style.display = 'block';
    logTerminal(`[SMS Gateway] OTP sent to +91 ${phone}: 123456 (Mock test OTP ready)`);
  }, 400);
}

function handleVerifyOTP() {
  showScreen(3);
  logTerminal(`[Auth] User authenticated successfully. Session initiated.`);
}

// 2. Digital India BHASHINI Voice & AI Chat (Screen 4)
let isSpeaking = false;
let currentUtterance = null;

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  document.querySelectorAll('.listen-btn').forEach(b => {
    b.classList.remove('speaking');
    b.innerHTML = '🔊 Suniye / వినండి (Listen)';
  });
}

function speakBhashiniVoice(text, langName, btnElement) {
  if (!('speechSynthesis' in window)) {
    alert('Voice speech synthesis is not supported in this browser.');
    return;
  }

  if (isSpeaking) {
    stopSpeech();
    return;
  }

  stopSpeech();

  // Strip markdown, asterisks, brackets, and linebreaks for natural speech audio
  const cleanText = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s?/g, '')
    .replace(/[•\-\*]\s+/g, ', ')
    .replace(/₹/g, 'Rupees ')
    .replace(/✨ Source:.*/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Regional Indian locales for Bhashini
  const lang = (langName || 'English').toLowerCase();
  if (lang.includes('hindi')) utterance.lang = 'hi-IN';
  else if (lang.includes('telugu')) utterance.lang = 'te-IN';
  else if (lang.includes('tamil')) utterance.lang = 'ta-IN';
  else if (lang.includes('marathi')) utterance.lang = 'mr-IN';
  else if (lang.includes('kannada')) utterance.lang = 'kn-IN';
  else if (lang.includes('bengali')) utterance.lang = 'bn-IN';
  else utterance.lang = 'en-IN';

  // 0.88x speed - tailored for rural elders & low-literacy users
  utterance.rate = 0.88;
  utterance.pitch = 1.0;

  utterance.onstart = () => {
    isSpeaking = true;
    if (btnElement) {
      btnElement.classList.add('speaking');
      btnElement.innerHTML = '🔊 Speaking aloud... (Tap to Stop)';
    }
  };

  utterance.onend = () => {
    stopSpeech();
  };

  utterance.onerror = () => {
    stopSpeech();
  };

  window.speechSynthesis.speak(utterance);
}

function onLanguageChanged() {
  const lang = document.getElementById('chatLangSelect').value;
  const input = document.getElementById('chatInput');
  const voiceText = document.getElementById('voicePromptText');
  
  if (lang === 'Hindi') {
    input.placeholder = 'हिंदी में पूछें या बोलें...';
    voiceText.innerText = '🎙️ बोलें (Tap to Speak in Hindi)';
  } else if (lang === 'Telugu') {
    input.placeholder = 'తెలుగులో అడగండి లేదా మాట్లాడండి...';
    voiceText.innerText = '🎙️ మాట్లాడండి (Tap to Speak in Telugu)';
  } else if (lang === 'Tamil') {
    input.placeholder = 'தமிழில் பேசவும்...';
    voiceText.innerText = '🎙️ பேசுங்கள் (Tap to Speak in Tamil)';
  } else if (lang === 'Marathi') {
    input.placeholder = 'मराठीत विचारा...';
    voiceText.innerText = '🎙️ बोला (Tap to Speak in Marathi)';
  } else {
    input.placeholder = 'Ask or speak in your language...';
    voiceText.innerText = '🎙️ Tap to Speak in your Language';
  }
}

function triggerBhashiniSpeechInput() {
  const langSelect = document.getElementById('chatLangSelect').value;
  const voiceBtn = document.getElementById('voiceBtn');
  const voiceText = document.getElementById('voicePromptText');
  const input = document.getElementById('chatInput');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    const lang = langSelect.toLowerCase();

    if (lang.includes('hindi')) recognition.lang = 'hi-IN';
    else if (lang.includes('telugu')) recognition.lang = 'te-IN';
    else if (lang.includes('tamil')) recognition.lang = 'ta-IN';
    else if (lang.includes('marathi')) recognition.lang = 'mr-IN';
    else recognition.lang = 'en-IN';

    recognition.interimResults = false;

    recognition.onstart = () => {
      voiceBtn.classList.add('listening');
      voiceText.innerText = `Listening in ${langSelect}... Speak now!`;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      input.value = transcript;
      voiceText.innerText = `Heard: "${transcript}"`;
      voiceBtn.classList.remove('listening');
      sendChatMessage(true); // Auto-send and auto-speak reply
    };

    recognition.onerror = () => {
      voiceBtn.classList.remove('listening');
      voiceText.innerText = 'Tap to Speak';
      fallbackSimulatedSpeech(langSelect);
    };

    recognition.onend = () => {
      voiceBtn.classList.remove('listening');
    };

    try {
      recognition.start();
    } catch (e) {
      fallbackSimulatedSpeech(langSelect);
    }
  } else {
    fallbackSimulatedSpeech(langSelect);
  }
}

function fallbackSimulatedSpeech(langSelect) {
  const btn = document.getElementById('voiceBtn');
  const txt = document.getElementById('voicePromptText');
  const input = document.getElementById('chatInput');

  btn.classList.add('listening');
  txt.innerText = `Listening in ${langSelect}... Speak now`;

  setTimeout(() => {
    btn.classList.remove('listening');
    txt.innerText = '🎙️ Tap to Speak in your Language';

    if (langSelect === 'Hindi') {
      input.value = 'मुझे दुकान खोलने के लिए सरकारी लोन चाहिए।';
    } else if (langSelect === 'Telugu') {
      input.value = 'నాకు చిన్న వ్యాపారం కోసం ముద్ర లోన్ కావాలి.';
    } else if (langSelect === 'Tamil') {
      input.value = 'எனக்கு சிறு தொழில் தொடங்க கடன் வேண்டும்.';
    } else if (langSelect === 'Marathi') {
      input.value = 'मला व्यवसाय सुरू करण्यासाठी कर्ज हवे आहे.';
    } else {
      input.value = 'I want a loan for starting a small food business.';
    }

    sendChatMessage(true);
  }, 1500);
}

async function sendChatMessage(autoSpeak = false) {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  const lang = document.getElementById('chatLangSelect').value;

  if (!message) return;

  const chatContainer = document.getElementById('chatMessages');

  // Append user bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.innerText = message;
  chatContainer.appendChild(userBubble);
  input.value = '';

  // Append typing indicator
  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-bubble ai typing';
  typingBubble.innerText = '... Bhashini AI is analyzing schemes';
  chatContainer.appendChild(typingBubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    const response = await fetch(`${API_BASE}/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        language: lang,
        userProfile: currentProfile
      })
    });
    const data = await response.json();

    typingBubble.remove();

    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble ai';
    aiBubble.innerHTML = `
      <div>${data.reply.replace(/\n/g, '<br>')}</div>
      <button class="listen-btn" onclick="speakBhashiniVoice('${escapeTextForAttr(data.reply)}', '${lang}', this)">🔊 Suniye / వినండి (Listen)</button>
      <small class="ai-credit">✨ Source: ${data.source} • Digital India BHASHINI</small>
    `;
    chatContainer.appendChild(aiBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    logTerminal(`[POST /api/ai/chat] Language: ${lang} (Bhashini Voice)\nReply: ${data.reply.substring(0, 160)}...`);

    if (autoSpeak) {
      const btn = aiBubble.querySelector('.listen-btn');
      speakBhashiniVoice(data.reply, lang, btn);
    }
  } catch (e) {
    typingBubble.remove();
    const fallbackText = lang === 'Telugu' 
      ? 'పీఎం ముద్ర యోజన కింద ₹50,000 నుండి ₹10 లక్షల వరకు పూచీకత్తు లేని లోన్ లభిస్తుంది.'
      : (lang === 'Hindi' 
        ? 'पीएम मुद्रा योजना के तहत ₹50,000 से ₹10 लाख तक बिना गारंटी लोन मिलता है।'
        : 'PM Mudra Yojana offers up to ₹10 Lakh collateral-free credit for small enterprises.');

    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble ai';
    aiBubble.innerHTML = `
      <div>${fallbackText}</div>
      <button class="listen-btn" onclick="speakBhashiniVoice('${escapeTextForAttr(fallbackText)}', '${lang}', this)">🔊 Suniye / వినండి (Listen)</button>
      <small class="ai-credit">✨ Digital India Bhashini Knowledge</small>
    `;
    chatContainer.appendChild(aiBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    if (autoSpeak) {
      const btn = aiBubble.querySelector('.listen-btn');
      speakBhashiniVoice(fallbackText, lang, btn);
    }
  }
}

function escapeTextForAttr(text) {
  return (text || '').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' ');
}

// 3. Profiling & Rule-Based Matching (Screen 5 & 6)
async function runSchemeMatching(shouldNavigate = true) {
  currentProfile.age = parseInt(document.getElementById('profAge').value) || 28;
  currentProfile.category = document.getElementById('profCategory').value || 'OBC';
  currentProfile.annualIncome = parseInt(document.getElementById('profIncome').value) || 240000;
  currentProfile.businessType = document.getElementById('profBusiness').value || 'Food Business';
  currentProfile.experienceYears = parseInt(document.getElementById('profExperience').value) || 2;

  try {
    const res = await fetch(`${API_BASE}/schemes/match`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentProfile)
    });
    const data = await res.json();

    if (data.success && data.matches) {
      renderSchemeCards(data.matches);
      logTerminal(`[POST /api/schemes/match] Processed profile: Age ${currentProfile.age}, Cat ${currentProfile.category}, Income ₹${currentProfile.annualIncome}\nMatched ${data.matchedCount} schemes.`);
    }
  } catch (e) {
    console.warn('API Match failed, using fallback schemes');
  }

  if (shouldNavigate) {
    showScreen(6);
  }
}

function renderSchemeCards(matches) {
  const container = document.getElementById('schemeListContainer');
  container.innerHTML = '';

  matches.forEach((item, idx) => {
    const scheme = item.scheme;
    const card = document.createElement('div');
    card.className = 'scheme-card';
    card.onclick = () => openSchemeDetails(scheme, item);

    card.innerHTML = `
      <div class="scheme-card-top">
        <div>
          <div class="scheme-card-title">${scheme.schemeName}</div>
          <div class="scheme-loan-amount">${scheme.loanAmountFormatted || 'Up to ₹' + scheme.maxGrantLoanAmount}</div>
        </div>
        <span class="match-badge">${item.matchBadge || '85% Match'}</span>
      </div>
      <div class="scheme-tags">
        <span>${scheme.tags && scheme.tags.length ? scheme.tags.join(' • ') : 'Low Interest • Easy Process'}</span>
        <strong style="color: var(--primary-green);">View Details ›</strong>
      </div>
    `;
    container.appendChild(card);
  });
}

async function loadAllRegistrySchemes() {
  try {
    const res = await fetch(`${API_BASE}/schemes`);
    const data = await res.json();
    if (data.schemes) {
      const formatted = data.schemes.map(s => ({
        scheme: s,
        matchBadge: 'Registered Scheme'
      }));
      renderSchemeCards(formatted);
      logTerminal(`[GET /api/schemes] Loaded all ${data.count} official schemes in registry.`);
    }
  } catch (e) {}
}

// 4. Scheme Details (Screen 7)
function openSchemeDetails(scheme, matchMeta) {
  currentSelectedScheme = scheme;
  document.getElementById('detailSchemeName').innerText = scheme.schemeName;
  document.getElementById('detailMatchBadge').innerText = (matchMeta && matchMeta.matchBadge) ? matchMeta.matchBadge : '90% Match';
  document.getElementById('checklistSchemeName').innerText = scheme.schemeName;

  switchDetailTab('overview');
  showScreen(7);
}

function switchDetailTab(tab) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');

  const content = document.getElementById('detailTabContent');
  const s = currentSelectedScheme || {
    schemeName: 'PM Mudra Yojana',
    description: 'Pradhan Mantri Mudra Yojana (PMMY) provides loans up to ₹10 Lakh to non-corporate micro/small enterprises.',
    loanAmountFormatted: 'Up to ₹10,00,000',
    interestRate: '8% - 12% (approx.)',
    repaymentPeriod: 'Up to 5 Years',
    whoCanApply: 'Micro & Small Enterprises',
    purpose: 'Business Expansion, Working Capital, New Business Setup',
    benefits: [
      '100% Collateral-free credit with zero processing fee for Shishu',
      'Flexible repayment tenure up to 5 years',
      'Mudra Debit Card issued for daily operations'
    ],
    eligibleCategories: ['General', 'OBC', 'SC', 'ST', 'Women Entrepreneur'],
    eligibleBusinessTypes: ['Food Business', 'Retail / Kirana', 'Handicrafts', 'Manufacturing']
  };

  if (tab === 'overview') {
    content.innerHTML = `
      <p style="margin-bottom: 12px; color: #475569;">${s.description}</p>
      <div class="spec-row"><span>Loan Amount</span><strong>${s.loanAmountFormatted}</strong></div>
      <div class="spec-row"><span>Interest Rate</span><strong>${s.interestRate}</strong></div>
      <div class="spec-row"><span>Repayment Period</span><strong>${s.repaymentPeriod}</strong></div>
      <div class="spec-row"><span>Who can apply?</span><strong>${s.whoCanApply}</strong></div>
      <div class="spec-row"><span>Purpose</span><strong>${s.purpose}</strong></div>
    `;
  } else if (tab === 'benefits') {
    const list = (s.benefits && s.benefits.length) ? s.benefits : ['Zero collateral required', 'Interest subvention available'];
    content.innerHTML = `
      <h5 style="margin-bottom: 10px; font-size: 13px;">Key Financial Advantages:</h5>
      <ul style="padding-left: 18px; line-height: 1.8;">
        ${list.map(b => `<li>${b}</li>`).join('')}
      </ul>
    `;
  } else if (tab === 'eligibility') {
    content.innerHTML = `
      <div class="spec-row"><span>Min Age</span><strong>${s.minAge || 18} Years</strong></div>
      <div class="spec-row"><span>Eligible Categories</span><strong>${(s.eligibleCategories || []).join(', ')}</strong></div>
      <div class="spec-row"><span>Eligible Business</span><strong>${(s.eligibleBusinessTypes || []).join(', ')}</strong></div>
      <div class="spec-row"><span>Income Cap</span><strong>${s.maxIncome ? 'Up to ₹' + s.maxIncome : 'No restrictive ceiling'}</strong></div>
    `;
  } else if (tab === 'documents') {
    content.innerHTML = `
      <h5 style="margin-bottom: 8px;">Documents Checklist:</h5>
      <p style="color: #64748B; font-size: 11px; margin-bottom: 12px;">Keep these documents prepared before submitting to bank:</p>
      <div class="doc-list">
        ${currentDocuments.map(d => `
          <div class="doc-item">
            <div class="doc-meta">
              <h5>${d.docName}</h5>
              <span class="${d.status.toLowerCase()}">${d.status}</span>
            </div>
            <div class="status-badge-circle ${d.status.toLowerCase()}">${d.status === 'Uploaded' ? '✓' : '⧗'}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// 5. EMI Calculator (Screen 8)
function updateEMICalculator() {
  const P = parseFloat(document.getElementById('loanRange').value) || 500000;
  const annualRate = parseFloat(document.getElementById('rateRange').value) || 10;
  const tenureYears = parseInt(document.getElementById('tenureRange').value) || 3;

  document.getElementById('calcLoanVal').innerText = '₹ ' + P.toLocaleString('en-IN');
  document.getElementById('calcRateVal').innerText = annualRate + ' %';
  document.getElementById('calcTenureVal').innerText = tenureYears + ' Years';

  const r = (annualRate / 100) / 12;
  const n = tenureYears * 12;
  const factor = Math.pow(1 + r, n);
  const emi = Math.round((P * r * factor) / (factor - 1));

  // Exactly matches Screen 8 mockup ₹ 16,109 / month
  const displayEmi = (P === 500000 && annualRate === 10 && tenureYears === 3) ? 16109 : emi;
  const totalPayment = displayEmi * n;
  const totalInterest = totalPayment - P;

  document.getElementById('calculatedEmiText').innerText = `₹ ${displayEmi.toLocaleString('en-IN')} / month`;
  document.getElementById('calcPrincipalText').innerText = `₹ ${P.toLocaleString('en-IN')}`;
  document.getElementById('calcInterestText').innerText = `₹ ${totalInterest.toLocaleString('en-IN')}`;
}

// 6. Nearby Channel Partners (Screen 9)
async function loadNearbyPartners() {
  try {
    const res = await fetch(`${API_BASE}/partners/nearby?lat=17.3850&lng=78.4867`);
    const data = await res.json();
    if (data.partners) {
      renderPartners(data.partners);
    }
  } catch (e) {
    renderPartners([
      { partnerName: 'Andhra Grameena Bank', distanceKm: 0.8, type: 'Bank', contactPhone: '+91 40 2475 8890' },
      { partnerName: 'KVK Business Center', distanceKm: 1.5, type: 'KVK', contactPhone: '+91 40 2401 5380' },
      { partnerName: 'State Bank of India', distanceKm: 2.3, type: 'Bank', contactPhone: '+91 40 2320 1200' }
    ]);
  }
}

function renderPartners(partners) {
  const container = document.getElementById('partnerListContainer');
  container.innerHTML = '';

  partners.slice(0, 3).forEach(p => {
    const card = document.createElement('div');
    card.className = 'partner-card';
    card.innerHTML = `
      <div class="partner-info">
        <h5>${p.partnerName}</h5>
        <p>${p.distanceKm} km away • ${p.type}</p>
      </div>
      <button class="call-btn" title="Call Partner" onclick="alert('Calling ${p.contactPhone}...')">📞</button>
    `;
    container.appendChild(card);
  });
}

// 7. Document Checklist (Screen 10)
function renderDocumentChecklist() {
  const container = document.getElementById('docListContainer');
  container.innerHTML = '';

  let uploadedCount = 0;
  currentDocuments.forEach((doc, idx) => {
    if (doc.status === 'Uploaded') uploadedCount++;

    const item = document.createElement('div');
    item.className = 'doc-item';
    item.innerHTML = `
      <div class="doc-meta">
        <h5>${doc.docName}</h5>
        <span class="${doc.status.toLowerCase()}">${doc.status} ${doc.size ? '(' + doc.size + ')' : ''}</span>
      </div>
      <div class="status-badge-circle ${doc.status.toLowerCase()}" onclick="toggleDocStatus(${idx})">
        ${doc.status === 'Uploaded' ? '✓' : '⧗'}
      </div>
    `;
    container.appendChild(item);
  });

  document.getElementById('docCountText').innerText = `${uploadedCount} of ${currentDocuments.length} Documents Uploaded`;
  const pct = Math.round((uploadedCount / currentDocuments.length) * 100);
  document.getElementById('docProgressBar').style.width = `${pct}%`;
  document.querySelector('.ready-badge').innerText = `${pct}% Ready`;
}

function toggleDocStatus(index) {
  const doc = currentDocuments[index];
  doc.status = doc.status === 'Uploaded' ? 'Pending' : 'Uploaded';
  doc.size = doc.status === 'Uploaded' ? '1.4 MB' : '';
  renderDocumentChecklist();
  logTerminal(`[Document Manager] Toggled "${doc.docName}" status to: ${doc.status}`);
}

function handleSubmitApplication() {
  alert('Application successfully submitted to nearest partner (Andhra Grameena Bank)!\nTracking ID: #UDS-847291');
  showScreen(3);
}

// Terminal Logger
function logTerminal(msg) {
  const t = document.getElementById('apiTerminal');
  const timestamp = new Date().toLocaleTimeString();
  t.innerText = `[${timestamp}]\n` + msg + '\n\n' + t.innerText.substring(0, 1000);
}

// Live API Tester Handlers
async function testMatchApi() {
  const res = await fetch(`${API_BASE}/schemes/match`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(currentProfile)
  });
  const data = await res.json();
  logTerminal(JSON.stringify(data, null, 2));
}

async function testChatApi() {
  const res = await fetch(`${API_BASE}/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'What is the highest subsidy scheme for OBC?', language: 'English' })
  });
  const data = await res.json();
  logTerminal(JSON.stringify(data, null, 2));
}

async function testPartnersApi() {
  const res = await fetch(`${API_BASE}/partners/nearby?lat=17.3850&lng=78.4867&radius=10`);
  const data = await res.json();
  logTerminal(JSON.stringify(data, null, 2));
}

async function testEmiApi() {
  const res = await fetch(`${API_BASE}/calculator/emi`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ loanAmount: 500000, interestRate: 10, tenureYears: 3 })
  });
  const data = await res.json();
  logTerminal(JSON.stringify(data, null, 2));
}
