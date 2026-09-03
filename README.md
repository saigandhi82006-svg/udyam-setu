# Udyam Setu (उद्यम सेतु)
### AI-Driven Scheme Matching Platform for Marginalized Entrepreneurs
**Smart India Hackathon (SIH 2026) | Problem Statement ID: 92**
*Right Scheme • Right Guidance • Right Growth*

---

## 📌 Executive Summary
**Udyam Setu** bridges the information and accessibility gap between marginalized, rural, and small-scale entrepreneurs (including street vendors, SHG women, traditional artisans, and micro-business owners) and Government of India financial empowerment initiatives (e.g., PM Mudra Yojana, PMEGP, Stand-Up India, PM SVANidhi, PM Vishwakarma).

The platform combines a **deterministic rule-based eligibility engine** (ensuring 100% compliance with government criteria without AI hallucinations), a **multilingual Gemini conversational assistant** for rural founders, a **mathematical EMI & subsidy planner**, and a **geospatial channel partner finder** (connecting entrepreneurs directly to local RRBs, Common Service Centers, and KVKs).

---

## 🏛️ System Architecture

```
                               +--------------------------------------------+
                               |           Udyam Setu Mobile App            |
                               |              (Flutter + Dart)              |
                               |    10 Modular Screens + Voice Interface    |
                               +---------------------+----------------------+
                                                     |
                                                     | HTTPS / REST APIs
                                                     v
                               +--------------------------------------------+
                               |            Udyam Setu Backend              |
                               |             (Node.js + Express)            |
                               +----+---------------+------------------+----+
                                    |               |                  |
               +--------------------+               |                  +--------------------+
               v                                    v                                       v
+-------------------------------+  +-------------------------------+  +-------------------------------+
|    Rule-Based Match Engine    |  |     Gemini AI Assistant       |  |   Channel Partner Discovery   |
|   - Hard Eligibility Filters  |  |   - Google Gemini API         |  |   - Haversine / $near Query   |
|   - Dynamic Match Scoring     |  |   - Vernacular Explanations   |  |   - Banks, CSCs & KVK Centers |
|   - Category & Income Checks  |  |   - Document Guidance         |  |   - GeoJSON Spatial Routing   |
+-------------------------------+  +-------------------------------+  +-------------------------------+
               |                                    |                                       |
               +------------------------------------+---------------------------------------+
                                                    |
                                                    v
                               +--------------------------------------------+
                               |          MongoDB Database (Mongoose)       |
                               |    Users | Schemes | Partners | Apps       |
                               |   (With Zero-Dependency Auto-Fallback)     |
                               +--------------------------------------------+
```

---

## 📱 10-Step User Interface Workflow (SIH Specifications)

| Step | Screen Name | Description | Key Modules |
|:---|:---|:---|:---|
| **1** | **Splash Screen** | Welcome screen with brand emblem, agricultural landscape, mission statement, and carousel indicators. | Logo, Branding, "Get Started" Navigation |
| **2** | **Login / Sign Up** | Secure OTP-based authentication, Google sign-in, and instant guest access for hassle-free evaluation. | SMS Gateway Simulation, Auth Controller |
| **3** | **Home Dashboard** | Personalized greeting, "Find Schemes for You" hero banner, 6 quick-access feature tiles, and 4-tab bottom navigation. | Quick Grid, Banner, Bottom Navigation |
| **4** | **AI Chat / Ask** | Multilingual assistant explaining complex schemes into simple vernacular language with "Tap to Speak" voice input. | Gemini API, Speech-to-Text, Vernacular Selector |
| **5** | **User Details** | Step-by-step profiling capturing Age, Category (OBC/SC/ST/Women), Annual Income, Business Type, and Experience. | Stepper Form, Validation, Currency Formatter |
| **6** | **Scheme Match Results** | Prioritized scheme cards displaying dynamic match score badges (`90% Match`), loan caps, and advantage tags. | Deterministic Matching Engine, Filter Engine |
| **7** | **Scheme Details** | Deep breakdown across 4 tabs: Overview, Key Benefits & Subsidies, Eligibility Checklist, and Required Documents. | Financial Specs, Save Bookmark, Apply Flow |
| **8** | **EMI Calculator** | Interactive sliders for Principal Loan, Interest Rate, and Tenure with instantaneous EMI formula calculation. | Standard EMI Formula, Breakdown Cards |
| **9** | **Nearest Partner** | Interactive spatial map & partner cards (RRBs, CSCs, KVKs) with distance in km and direct calling capability. | Haversine Spatial Query, Google Maps, Phone Dialer |
| **10** | **Document Checklist** | Dynamic checklist based on scheme requirements (Aadhaar, PAN, Project Report) with `Uploaded` / `Pending` status. | Document Status Manager, Application Tracking |

---

## 🗂️ Project Directory Structure

```
UDYAM SETU/
├── backend/                             # Node.js + Express REST API Backend
│   ├── config/
│   │   └── db.js                        # MongoDB Mongoose connection + memory failover
│   ├── models/
│   │   ├── User.js                      # Entrepreneur profile schema
│   │   ├── Scheme.js                    # Government scheme schema
│   │   ├── ChannelPartner.js            # Banks, CSC, KVK schema with 2dsphere index
│   │   └── Application.js               # Application lifecycle & doc upload schema
│   ├── routes/
│   │   ├── auth.routes.js               # Mobile OTP, Google, Guest login
│   │   ├── schemes.routes.js            # Scheme listing & /match engine endpoint
│   │   ├── ai.routes.js                 # Gemini AI multilingual chat handler
│   │   ├── partners.routes.js           # Spatial query for nearby partner centers
│   │   ├── calculator.routes.js         # Standard mathematical EMI calculator
│   │   ├── applications.routes.js       # Applications & document checklist
│   │   └── user.routes.js               # User profiling data routes
│   ├── services/
│   │   ├── matchingEngine.js            # Deterministic rule-based eligibility algorithm
│   │   ├── aiService.js                 # Gemini API client with vernacular fallback
│   │   └── dataStore.js                 # Dual-mode repository layer
│   ├── middleware/
│   │   └── error.middleware.js          # Central error handling
│   ├── test/
│   │   └── api.test.js                  # Automated verification test suite
│   ├── seed.js                          # Pre-populated real Indian scheme dataset
│   ├── server.js                        # Express server entry point
│   ├── package.json
│   └── .env
│
├── frontend/                            # Flutter Mobile Application
│   ├── lib/
│   │   ├── main.dart                    # Flutter entry point & route definitions
│   │   ├── theme/
│   │   │   └── app_theme.dart           # Custom green & saffron theme typography
│   │   ├── models/
│   │   │   ├── scheme.dart              # Scheme model with JSON serialization
│   │   │   ├── user.dart                # User profile model
│   │   │   ├── channel_partner.dart     # Spatial partner model
│   │   │   ├── application.dart         # Application tracking model
│   │   │   └── chat_message.dart        # Chat dialogue model
│   │   ├── services/
│   │   │   ├── api_service.dart         # HTTP REST API client with fallback
│   │   │   ├── speech_service.dart      # Voice-to-text integration
│   │   │   └── mock_data_service.dart   # Offline fallback dataset
│   │   └── screens/
│   │       ├── splash_screen.dart       # Screen 1: Splash & Mission
│   │       ├── auth_screen.dart         # Screen 2: Login & OTP
│   │       ├── home_dashboard_screen.dart # Screen 3: Home Dashboard
│   │       ├── ai_chat_screen.dart      # Screen 4: Gemini AI Chat Assistant
│   │       ├── user_profiling_screen.dart # Screen 5: Multi-Step Questionnaire
│   │       ├── scheme_results_screen.dart # Screen 6: Ranked Match Results
│   │       ├── scheme_detail_screen.dart  # Screen 7: Scheme Details & Tabs
│   │       ├── emi_calculator_screen.dart # Screen 8: Loan EMI Calculator
│   │       ├── nearby_partners_screen.dart # Screen 9: Channel Partner Locator
│   │       ├── document_checklist_screen.dart # Screen 10: Document Checklist
│   │       ├── my_applications_screen.dart # Application tracker
│   │       ├── profile_screen.dart      # Entrepreneur Profile
│   │       └── saved_schemes_screen.dart # Bookmarked schemes
│   └── pubspec.yaml                     # Dependencies (google_maps, speech_to_text, etc.)
│
├── test_harness/                        # Interactive Live Browser Preview & API Runner
│   ├── index.html                       # 10-screen visual simulator + API tester
│   ├── style.css                        # Mobile frame styling & responsive layout
│   └── app.js                           # Real-time client connecting to /api/*
│
└── README.md
```

---

## ⚡ Quick Start Guide

### 1. Running the Backend REST API
Ensure Node.js (v18+) is installed.

```bash
cd backend
npm install
npm run seed      # Seeds official Indian schemes & channel partners
npm start         # Starts REST API on http://localhost:5000
```

### 2. Testing via Interactive Browser Simulator
Once the backend is running, open your web browser to:
👉 **`http://localhost:5000/preview`** or **`http://localhost:5000/`**

This allows you to:
- Test all **10 screens** in an interactive mobile phone container.
- Input custom profile values in **Screen 5** and witness the **Deterministic Rule Engine** rank schemes with real-time match badges.
- Interact with the **Gemini AI chat assistant** in English or Indian languages.
- Adjust sliders in the **EMI Calculator** and verify mathematical calculations.
- Test spatial channel partner discovery and document checklist uploads.
- View and execute raw REST API requests in the **Live API Tester** panel.

### 3. Running Backend Automated Tests
```bash
cd backend
npm test
```
**Test Coverage:**
- `Test 1:` Rule Matching Engine prioritizes PM Mudra Yojana & PMEGP for OBC Food Entrepreneurs.
- `Test 2:` Affirmative action rules trigger Stand-Up India and Mahila Coir Yojana for Women.
- `Test 3:` Hard age constraints strictly disqualify ineligible applicants (< 18 yrs).
- `Test 4:` Mathematical EMI formula calculates exact monthly repayment (e.g., ₹16,109/month for ₹5L @ 10% for 3 yrs).
- `Test 5:` AI Assistant responds substantively to natural language business queries.

### 4. Running the Flutter Mobile App
When Flutter SDK is installed:
```bash
cd frontend
flutter pub get
flutter run
```
*Supports Android, iOS, and Flutter Web.*

---

## 🧠 Core Algorithms & Technical Details

### 1. Deterministic Rule-Based Scheme Matching Engine
The engine processes applicant criteria through four sequential hard constraints before scoring:
1. **Age Constraint:** `Applicant.age >= Scheme.minAge && Applicant.age <= Scheme.maxAge`
2. **Income Ceiling:** `Scheme.maxIncome == 0 || Applicant.annualIncome <= Scheme.maxIncome`
3. **Category Eligibility:** Affirmative demographic inclusion (`OBC`, `SC`, `ST`, `Women Entrepreneur`, or `All`)
4. **Business Activity Fit:** Sector classification matching the applicant's venture.

**Dynamic Score Computation:**
$$\text{Score} = \text{Base}(65) + \text{CategoryAffinity}(+10) + \text{SectorAlignment}(+10) + \text{IncomePriority}(+5) + \text{ExperienceCredit}(+5)$$
Normalized between 60% and 95% to produce human-interpretable match badges (e.g. `90% Match`).

### 2. Mathematical EMI Formula
Monthly installment is calculated using standard financial mathematics:
$$\text{EMI} = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}$$
Where:
- $P$ = Principal Loan Amount (e.g. ₹5,00,000)
- $r$ = Monthly interest rate ($\frac{\text{Annual Rate}}{12 \times 100}$)
- $n$ = Number of monthly installments ($\text{Tenure Years} \times 12$)

### 3. Geospatial Channel Partner Discovery
Utilizes spherical distance via the **Haversine Formula** and MongoDB `$near` 2dsphere index to calculate geodesic distances in kilometers between user coordinates $(lat_1, lon_1)$ and partner centers $(lat_2, lon_2)$:
$$d = 2R \arcsin \left( \sqrt{ \sin^2\left(\frac{\Delta \phi}{2}\right) + \cos(\phi_1)\cos(\phi_2)\sin^2\left(\frac{\Delta \lambda}{2}\right) } \right)$$

---

## 🇮🇳 Real Indian Government Schemes Included
1. **Pradhan Mantri Mudra Yojana (PMMY):** Collateral-free loans up to ₹10 Lakhs (Shishu, Kishore, Tarun) for micro-enterprises.
2. **Prime Minister's Employment Generation Programme (PMEGP):** Credit-linked subsidy up to 35% for rural and marginalized entrepreneurs.
3. **Stand-Up India Scheme:** Greenfield credit between ₹10 Lakh and ₹1 Crore for SC/ST and Women founders.
4. **PM SVANidhi:** Working capital micro-credit with 7% interest subsidy for street vendors and hawkers.
5. **PM Vishwakarma Yojana:** ₹15,000 modern toolkit incentive + 5% concessional credit for traditional craftspeople and artisans.
6. **Mahila Coir Yojana:** 75% capital subsidy for rural women setting up coir and bio-fiber processing units.

---

## 🏆 Smart India Hackathon 2026 Evaluation Notes
- **Zero-Dependency Startup:** The backend includes a self-healing in-memory fallback. Even if local MongoDB is not running, the application starts and seeds 100% of data automatically.
- **Accurate Mathematical Rigor:** Formula calculations match the official banking tables and UI design mockup specifications.
- **Vernacular AI Readiness:** Gemini integration includes system prompts tuned specifically to bridge the digital and bureaucratic divide for rural Indian entrepreneurs.
