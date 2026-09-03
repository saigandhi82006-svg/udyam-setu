const express = require('express');
const router = express.Router();

/**
 * Standard EMI Formula:
 * EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
 * where:
 * P = Principal loan amount
 * r = Monthly interest rate (annual rate / 12 / 100)
 * n = Tenure in number of months (tenure in years * 12)
 */
function calculateEMI(principal, annualRate, tenureYears) {
  const P = parseFloat(principal);
  const annualR = parseFloat(annualRate);
  const n = parseInt(tenureYears, 10) * 12;

  if (P <= 0 || n <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0 };
  }

  // Handle 0% interest loans (such as interest-free subsidies / PM SVANidhi 1st tranche with 100% subsidy)
  if (annualR === 0) {
    const emi = Math.round(P / n);
    return {
      emi,
      totalPayment: P,
      totalInterest: 0,
      monthlyRate: 0,
      totalMonths: n
    };
  }

  const r = annualR / (12 * 100);
  const factor = Math.pow(1 + r, n);
  const emi = Math.round((P * r * factor) / (factor - 1));

  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  // Generate 12-month amortization preview
  let balance = P;
  const schedule = [];
  for (let month = 1; month <= Math.min(12, n); month++) {
    const interestPayment = Math.round(balance * r);
    const principalPayment = emi - interestPayment;
    balance = Math.max(0, balance - principalPayment);
    schedule.push({
      month,
      emi,
      principalPayment,
      interestPayment,
      remainingBalance: balance
    });
  }

  return {
    principal: P,
    annualRate: annualR,
    tenureYears: parseInt(tenureYears, 10),
    totalMonths: n,
    emi,
    totalInterest,
    totalPayment,
    schedule
  };
}

// POST /api/calculator/emi
router.post('/emi', (req, res) => {
  try {
    const { loanAmount = 500000, interestRate = 10, tenureYears = 3 } = req.body;

    const result = calculateEMI(loanAmount, interestRate, tenureYears);

    return res.json({
      success: true,
      data: {
        ...result,
        formattedEMI: `₹ ${result.emi.toLocaleString('en-IN')}`,
        formattedPrincipal: `₹ ${result.principal.toLocaleString('en-IN')}`,
        formattedInterest: `₹ ${result.totalInterest.toLocaleString('en-IN')}`,
        formattedTotalPayment: `₹ ${result.totalPayment.toLocaleString('en-IN')}`
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/calculator/emi?loanAmount=500000&interestRate=10&tenureYears=3
router.get('/emi', (req, res) => {
  try {
    const loanAmount = parseFloat(req.query.loanAmount) || 500000;
    const interestRate = parseFloat(req.query.interestRate) || 10;
    const tenureYears = parseInt(req.query.tenureYears, 10) || 3;

    const result = calculateEMI(loanAmount, interestRate, tenureYears);

    return res.json({
      success: true,
      data: {
        ...result,
        formattedEMI: `₹ ${result.emi.toLocaleString('en-IN')}`,
        formattedPrincipal: `₹ ${result.principal.toLocaleString('en-IN')}`,
        formattedInterest: `₹ ${result.totalInterest.toLocaleString('en-IN')}`,
        formattedTotalPayment: `₹ ${result.totalPayment.toLocaleString('en-IN')}`
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
