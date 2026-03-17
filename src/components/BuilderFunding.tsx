import { Building2 } from 'lucide-react';
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
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Builder / Project <span className="text-gold italic">Funding</span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              We specialize in arranging project funding for small builders who develop low-rise buildings in freehold or approved areas. Through our banking and NBFC network we help builders secure construction funding so projects can be completed faster and with proper financial support.
            </p>
            
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Building2 className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h4 className="text-white font-serif text-xl">Project Funding Support</h4>
                <p className="text-gray-500 text-sm font-light">For small builders & developers</p>
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
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Construction Project"
              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold font-serif text-2xl mb-2">Secure Funding</p>
                <p className="text-gray-300 font-light text-sm">Complete projects faster and efficiently.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
