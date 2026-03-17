import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, CreditCard, Briefcase, Building, Wallet, 
  RefreshCw, Landmark, Factory, HardHat, Building2, 
  CheckCircle2, ArrowRight, Calculator
} from 'lucide-react';

const loansData = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    icon: Home,
    description: "Make your dream home a reality with our competitive mortgage rates and expert guidance. We simplify the home buying process for you.",
    features: [
      "Up to 90% financing available",
      "Flexible repayment up to 30 years",
      "Attractive interest rates",
      "Quick and transparent processing"
    ]
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    icon: CreditCard,
    description: "Flexible funding for life's unexpected expenses, medical emergencies, debt consolidation, or major purchases without any collateral.",
    features: [
      "Collateral-free loans",
      "Disbursal in 24-48 hours",
      "Minimal documentation",
      "Flexible tenures up to 5 years"
    ]
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    icon: Briefcase,
    description: "Fuel your business growth, expand operations, or manage cash flow with our tailored business loans designed for enterprises of all sizes.",
    features: [
      "High loan amounts",
      "No collateral required (up to a limit)",
      "Fast approval process",
      "Customized repayment options"
    ]
  },
  {
    id: 'lap',
    title: 'Loan Against Property (LAP)',
    icon: Building,
    description: "Unlock the hidden value of your residential or commercial property to meet your large-scale personal or business financial needs.",
    features: [
      "Lower interest rates than personal loans",
      "High loan-to-value (LTV) ratio",
      "Longer repayment tenure",
      "Retain property ownership"
    ]
  },
  {
    id: 'working-capital',
    title: 'Working Capital Loan',
    icon: Wallet,
    description: "Ensure smooth day-to-day business operations with our flexible working capital solutions, keeping your supply chain moving.",
    features: [
      "Overdraft facilities available",
      "Quick access to funds",
      "Interest only on utilized amount",
      "Seamless renewal process"
    ]
  },
  {
    id: 'balance-transfer',
    title: 'Balance Transfer',
    icon: RefreshCw,
    description: "Transfer your existing high-interest loans to us and save significantly on your EMIs with better terms and top-up options.",
    features: [
      "Lower interest rates",
      "Top-up loan facility available",
      "Reduced EMI burden",
      "Minimal processing fee"
    ]
  },
  {
    id: 'od-cc',
    title: 'OD / CC Limit',
    icon: Landmark,
    description: "Overdraft and Cash Credit limits to manage your business's short-term cash requirements efficiently and effectively.",
    features: [
      "Pay interest only on usage",
      "Revolving credit facility",
      "Linked to business current account",
      "Flexible withdrawal and deposit"
    ]
  },
  {
    id: 'machinery-loan',
    title: 'Machinery Loan',
    icon: Factory,
    description: "Upgrade your manufacturing capabilities with specialized loans for purchasing new machinery and industrial equipment.",
    features: [
      "Up to 100% financing on equipment",
      "Competitive interest rates",
      "Fast-track approvals",
      "Repayment aligned with cash flow"
    ]
  },
  {
    id: 'builder-funding',
    title: 'Builder Project Funding',
    icon: HardHat,
    description: "Specialized construction finance for small to medium builders developing low-rise projects in freehold or approved areas.",
    features: [
      "Phased fund disbursement",
      "Customized moratorium periods",
      "Expert project evaluation",
      "Competitive pricing structures"
    ]
  },
  {
    id: 'construction-finance',
    title: 'Construction Finance',
    icon: Building2,
    description: "Comprehensive funding solutions for large-scale real estate, commercial, and industrial construction projects.",
    features: [
      "End-to-end project funding",
      "Structured repayment schedules",
      "Dedicated relationship manager",
      "Flexible collateral options"
    ]
  }
];

export default function LoansPage() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateEMI = () => {
    const p = principal;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return p / n;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayable = emi * tenure * 12;
  const totalInterest = totalPayable - principal;

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Our Loan <span className="text-gold italic">Products</span>
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Explore our comprehensive range of financial solutions designed to meet your personal and business needs with competitive rates and flexible terms.
          </p>
        </div>

        {/* Loan Cards */}
        <div className="space-y-8 mb-24">
          {loansData.map((loan) => {
            const Icon = loan.icon;
            return (
              <div key={loan.id} className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 hover:border-gold/30 transition-colors duration-300">
                
                {/* Left Side: Info */}
                <div className="flex-1 flex flex-col items-start">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 border border-gold/20">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h2 className="text-3xl font-serif text-white mb-4">{loan.title}</h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
                    {loan.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-auto group flex items-center justify-center px-6 py-3 bg-black border border-gold text-gold font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300 rounded-lg"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right Side: Key Features */}
                <div className="w-full lg:w-5/12 bg-black rounded-xl p-6 md:p-8 border border-dark-border flex flex-col justify-center">
                  <h3 className="text-gold text-sm font-semibold tracking-widest uppercase mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-light leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* EMI Calculator */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex items-center mb-10">
            <Calculator className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-white">EMI Calculator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Loan Amount</label>
                  <span className="text-gold font-semibold">{formatINR(principal)}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>1L</span>
                  <span>5Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Interest Rate (% p.a.)</label>
                  <span className="text-gold font-semibold">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Loan Tenure (Years)</label>
                  <span className="text-gold font-semibold">{tenure} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>1 Yr</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-black border border-dark-border rounded-2xl p-8 flex flex-col justify-center">
              <div className="text-center mb-8 pb-8 border-b border-dark-border">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Monthly EMI</p>
                <p className="text-4xl md:text-5xl font-serif text-gold">{formatINR(emi)}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-light">Principal Amount</span>
                  <span className="text-white font-medium">{formatINR(principal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-light">Total Interest</span>
                  <span className="text-white font-medium">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-dark-border">
                  <span className="text-gray-300 font-medium">Total Amount Payable</span>
                  <span className="text-gold font-semibold text-lg">{formatINR(totalPayable)}</span>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="mt-8 w-full block text-center px-6 py-4 bg-gold text-black font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 rounded-lg"
              >
                Apply for Loan
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
