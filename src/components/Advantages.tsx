import { Check } from 'lucide-react';

const advantages = [
  'Multiple Banks & NBFC Partnerships',
  'Market Comparison for Best Interest Rates',
  'Fast Loan Processing & File Login',
  'Professional Loan Guidance',
  'Transparent and Reliable Service',
];

export default function Advantages() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-dark/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-dark-border shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent z-10 mix-blend-overlay"></div>
            <img
              src="/images/advantage.png"
              alt="Smart Financial Solutions"
              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 "
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md border border-gold/30 p-4 rounded-xl">
              <p className="text-gold font-serif text-lg">Smart Financial Solutions</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Your Trusted Loan Partner</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gold mb-8 leading-tight">
              Why Choose <span className="text-gold italic">OneStop</span> Funding Solutions
            </h3>
            
            <p className="text-gold-light text-lg font-light leading-relaxed mb-10">
              We work with multiple banks and NBFCs to provide the best loan offers available in the market.
            </p>

            <ul className="space-y-6">
              {advantages.map((adv, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-gold group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="ml-4 text-gold-light font-light text-lg group-hover:text-gold transition-colors duration-300">
                    {adv}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
