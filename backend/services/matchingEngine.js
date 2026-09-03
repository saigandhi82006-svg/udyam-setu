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
    gender = 'Any'
  } = userProfile;

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
    reasons.push(`Meets age requirement (${minAge}-${maxAge} years)`);

    // --- Hard Constraint 2: Income Ceiling Check ---
    // If scheme.maxIncome is 0 or undefined, no upper income cap applies
    const isIncomeEligible = !scheme.maxIncome || scheme.maxIncome === 0 || annualIncome <= scheme.maxIncome;
    if (!isIncomeEligible) {
      continue; // Disqualified by income cap
    }
    if (scheme.maxIncome > 0) {
      reasons.push(`Income ₹${annualIncome.toLocaleString('en-IN')} is within maximum limit of ₹${scheme.maxIncome.toLocaleString('en-IN')}`);
    } else {
      reasons.push('No restrictive income ceiling');
    }

    // --- Hard Constraint 3: Social Category Match ---
    const eligibleCats = scheme.eligibleCategories || ['All'];
    const isCategoryEligible =
      eligibleCats.includes('All') ||
      eligibleCats.includes(category) ||
      (category === 'Women Entrepreneur' && eligibleCats.some(c => c.toLowerCase().includes('women'))) ||
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

    // --- Dynamic Match Score Computation (Normalized 60 - 95%) ---
    let score = 65; // Base score for clearing all 4 hard constraints

    // 1. Specific category prioritization bonus
    if (!eligibleCats.includes('All')) {
      if (eligibleCats.includes(category)) {
        score += 10;
        bonuses.push(`Special demographic priority for ${category}`);
      }
      if (category === 'Women Entrepreneur' && eligibleCats.some(c => c.toLowerCase().includes('women'))) {
        score += 12;
        bonuses.push('Women Entrepreneur special concession');
      }
    } else {
      score += 5;
    }

    // 2. Business Type Specificity bonus
    if (eligibleBusinesses.includes(businessType)) {
      score += 10;
      bonuses.push(`Direct sector match for ${businessType}`);
    } else {
      score += 5;
    }

    // 3. Low-Income / Marginalized Empowerment Bonus
    if (annualIncome <= 300000) {
      score += 5;
      bonuses.push('Low-income priority bracket');
    }

    // 4. Experience validation bonus
    if (experienceYears >= (scheme.minExperienceYears || 0)) {
      if (experienceYears >= 2) {
        score += 5;
        bonuses.push(`${experienceYears} years experience provides creditworthiness boost`);
      }
    }

    // Normalization clamp between 60% and 95%
    score = Math.min(95, Math.max(60, score));

    // Dynamic tag assignment
    let highlightTag = 'Eligible Scheme';
    if (score >= 90) {
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
