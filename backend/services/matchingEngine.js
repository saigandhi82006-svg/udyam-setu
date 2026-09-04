/**
 * Udyam Setu - Deterministic Rule-Based Scheme Matching Engine
 * SIH Problem Statement ID: 92
 */

function matchSchemesForUser(userProfile, allSchemes) {
  const {
    age = 28,
    category = 'OBC',
    annualIncome = 240000,
    businessType = 'Food Business',
    experienceYears = 2,
    gender = 'Male',
    hasDisability = false,
    disabilityType = 'None',
    disabilityPercentage = 'None',
    hasUdidCard = false,
    locationType = 'Rural',
    education = '8th Pass or Above'
  } = userProfile;

  const isDivyangjan = hasDisability === true || 
    hasDisability === 'Yes' || 
    String(hasDisability).toLowerCase() === 'true' || 
    category === 'Differently Abled (Divyangjan)' ||
    (disabilityType && disabilityType !== 'None');

  const isWomen = gender === 'Female' || category === 'Women Entrepreneur';
  const isRural = (locationType || 'Rural').toLowerCase().includes('rural');

  const results = [];

  for (const scheme of allSchemes) {
    const reasons = [];
    const bonuses = [];

    // --- Hard Constraint 1: Age Check ---
    const minAge = scheme.minAge || 18;
    const maxAge = scheme.maxAge || 70;
    const isAgeEligible = age >= minAge && age <= maxAge;
    if (!isAgeEligible) {
      continue; // Disqualified by hard rule
    }
    reasons.push(`Meets age criteria (${minAge}-${maxAge} yrs, applicant is ${age} yrs)`);

    // --- Hard Constraint 2: Income Ceiling Check ---
    const isIncomeEligible = !scheme.maxIncome || scheme.maxIncome === 0 || annualIncome <= scheme.maxIncome;
    if (!isIncomeEligible) {
      continue; // Disqualified by income cap
    }
    if (scheme.maxIncome > 0) {
      reasons.push(`Income ₹${annualIncome.toLocaleString('en-IN')} is within maximum limit of ₹${scheme.maxIncome.toLocaleString('en-IN')}`);
    } else {
      reasons.push('No restrictive income ceiling');
    }

    // --- Hard Constraint 3: Social Category & Disability Match ---
    const eligibleCats = scheme.eligibleCategories || ['All'];
    const isCategoryEligible =
      eligibleCats.includes('All') ||
      eligibleCats.includes(category) ||
      (isWomen && eligibleCats.some(c => c.toLowerCase().includes('women'))) ||
      (isDivyangjan && eligibleCats.some(c => c.toLowerCase().includes('differently') || c.toLowerCase().includes('divyang'))) ||
      (eligibleCats.includes('Marginalized') && ['SC', 'ST', 'OBC'].includes(category));

    if (!isCategoryEligible) {
      continue; // Disqualified by category restriction
    }
    reasons.push(`Eligible for ${category} category`);

    // --- Hard Constraint 4: Business Type Match ---
    const eligibleBusinesses = scheme.eligibleBusinessTypes || ['All'];
    const isBusinessEligible =
      eligibleBusinesses.includes('All') ||
      eligibleBusinesses.includes(businessType) ||
      (businessType.includes('Food') && eligibleBusinesses.some(b => b.includes('Food') || b.includes('Agriculture') || b.includes('Manufacturing'))) ||
      (businessType.includes('Retail') && eligibleBusinesses.some(b => b.includes('Retail') || b.includes('Services') || b.includes('Vending')));

    if (!isBusinessEligible) {
      continue; // Disqualified by business domain
    }
    reasons.push(`Eligible for ${businessType} activity`);

    // --- Dynamic Match Score Computation (Normalized 60 - 98%) ---
    let score = 65; // Base score for clearing all hard constraints

    // 1. Differently Abled / Divyangjan High-Priority Boost
    if (isDivyangjan) {
      const isDirectDivyangScheme = scheme.targetSector?.toLowerCase().includes('differently') || 
        scheme.targetSector?.toLowerCase().includes('divyang') ||
        scheme.shortCode === 'NHFDC-DSY';

      if (isDirectDivyangScheme) {
        score += 25;
        bonuses.push('100% Dedicated Divyangjan Swavalamban Empowerment Priority');
        reasons.push(`Qualified under Divyangjan Category (${disabilityType !== 'None' ? disabilityType : 'PwD'}, ${disabilityPercentage} benchmark disability)`);
      } else if (scheme.shortCode === 'PMEGP') {
        score += 18;
        bonuses.push('PMEGP Special Category 35% Capital Subsidy for Persons with Disabilities');
        reasons.push('Eligible for highest 35% non-repayable government capital grant as Divyangjan');
      } else {
        score += 8;
        bonuses.push('Special priority consideration under Divyangjan financial inclusion');
      }
    }

    // 2. Age Bracket & Youth Priority
    if (age >= 18 && age <= 35) {
      score += 6;
      bonuses.push('Youth Entrepreneur (18-35) high employability priority');
    } else if (age >= 50) {
      score += 4;
      bonuses.push('Experienced mature entrepreneur demographic boost');
    }

    // 3. Women Entrepreneurship Boost
    if (isWomen) {
      score += 10;
      bonuses.push('Women Entrepreneur special concession & interest rebate');
      reasons.push('Eligible for priority women quotas across credit-guarantee schemes');
    }

    // 4. Rural Area Higher Subsidy Benefit
    if (isRural && (scheme.subsidyPercentage >= 25 || scheme.shortCode === 'PMEGP')) {
      score += 8;
      bonuses.push('Rural enterprise location qualifies for maximum 35% capital subsidy');
      reasons.push('Rural jurisdiction grants higher subsidy tier than urban centers');
    }

    // 5. Specific category prioritization bonus
    if (!eligibleCats.includes('All')) {
      if (eligibleCats.includes(category)) {
        score += 8;
        bonuses.push(`Special demographic priority for ${category}`);
      }
    } else {
      score += 4;
    }

    // 6. Business Type Specificity bonus
    if (eligibleBusinesses.includes(businessType)) {
      score += 8;
      bonuses.push(`Direct sector match for ${businessType}`);
    } else {
      score += 4;
    }

    // 7. Low-Income / Marginalized Empowerment Bonus
    if (annualIncome <= 300000) {
      score += 5;
      bonuses.push('Low-income priority bracket (Subsidies favored)');
    }

    // 8. Experience validation bonus
    if (experienceYears >= (scheme.minExperienceYears || 0)) {
      if (experienceYears >= 2) {
        score += 5;
        bonuses.push(`${experienceYears} years experience provides creditworthiness boost`);
      }
    }

    // Normalization clamp between 60% and 98%
    score = Math.min(98, Math.max(60, score));

    // Dynamic tag assignment
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

  // Sort descending by matchPercentage, then by maxGrantLoanAmount
  results.sort((a, b) => {
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
