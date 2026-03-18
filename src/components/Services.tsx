import { Home, Briefcase, CreditCard, Landmark, Banknote, RefreshCw, Shield, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Home Loan',
    description: 'Finance for buying or constructing residential property.',
    icon: Home,
  },
  {
    title: 'Personal Loan',
    description: 'Quick unsecured loan for personal financial needs.',
    icon: CreditCard,
  },
  {
    title: 'Business Loan',
    description: 'Funding support for startups and growing businesses.',
    icon: Briefcase,
  },
  {
    title: 'Loan Against Property',
    description: 'High value loans using property as collateral.',
    icon: Landmark,
  },
  {
    title: 'Working Capital Loan',
    description: 'Maintain business cash flow and operations.',
    icon: Banknote,
  },
  {
    title: 'Balance Transfer',
    description: 'Shift your loan to another lender for better rates.',
    icon: RefreshCw,
  },
  {
    title: 'Secured Loans',
    description: 'Loans backed by property or assets.',
    icon: Shield,
  },
  {
    title: 'Unsecured Loans',
    description: 'Loans without collateral for quick approvals.',
    icon: ShieldAlert,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-black to-black opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Complete Funding Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gold mb-6 leading-tight">
            Loan Services We Offer
          </h3>
          <p className="text-gold-light text-lg font-light leading-relaxed">
            We process a wide range of secured and unsecured loans through our partner banks and NBFCs to provide the best interest rates and faster approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-dark-card border border-dark-border rounded-2xl hover:border-gold/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black border border-dark-border flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  
                  <h4 className="text-xl font-serif text-gold mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-gold-light font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/loans"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 rounded-lg group"
          >
            View All Loans
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
