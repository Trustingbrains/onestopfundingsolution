import { Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gold/10 rounded-3xl transform -rotate-3 scale-105"></div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
              alt="Business Meeting"
              className="relative rounded-3xl shadow-2xl border border-dark-border object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Simplifying the Loan Process
            </h3>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Our mission is to simplify the loan process and provide transparent, reliable, and fast financial solutions through strong partnerships with banks and NBFCs. We help customers compare multiple loan offers and choose the best one based on their financial profile and requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-serif text-xl mb-2">What We Do</h4>
                  <p className="text-gray-500 font-light">
                    We analyze customer needs and connect them with the right lenders for fast approvals and competitive interest rates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-serif text-xl mb-2">Helping You Get the Best Deals</h4>
                  <p className="text-gray-500 font-light">
                    We work as a financial channel partner and help customers choose the most suitable loan based on their needs, eligibility and financial profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
