import { Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BuilderFunding() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center px-4 py-2 border border-gold/30 rounded-full mb-8 bg-black/50 backdrop-blur-sm">
              <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">Special Service</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-8 leading-tight">
              Builder / Project <span className="text-gold italic">Funding</span>
            </h2>

            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gold font-serif text-xl mb-2">COMPLETE LOAN SOLUTIONS</h4>
                  <p className="text-gold-light font-light">
                    We provide funding solutions for all types of loans, including specialized support for real estate developers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gold font-serif text-xl mb-2">DEDICATED SUPPORT FOR DEVELOPERS</h4>
                  <p className="text-gold-light font-light">
                    For low-rise (approved/ freehold) & high-rise projects, our expert team works closely with you to understand your exact funding requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gold font-serif text-xl mb-2">NO NEED FOR PRIVATE FINANCIERS</h4>
                  <p className="text-gold-light font-light">
                    You don't need to rely on silent or private financiers. We connect you with trusted banks and NBFCs for secure funding.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gold font-serif text-xl mb-2">SMART BANKS & NBFC SELECTION</h4>
                  <p className="text-gold-light font-light">
                    Our team carefully selects the most suitable bank or NBFC based on your project needs to ensure smooth funding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-10">
              <div className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Building2 className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl">Project Funding Support</h4>
                <p className="text-gold-light text-sm font-light">For small builders & developers</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-semibold rounded-lg"
            >
              Discuss Your Project
            </Link>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-dark-border shadow-2xl group">
            <img
              src="/images/builder.png"
              alt="Construction Project"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold font-serif text-2xl mb-2">Secure Funding</p>
                <p className="text-gold-light font-light text-sm">Complete projects faster and efficiently.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}