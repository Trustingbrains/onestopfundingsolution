import { useEffect } from 'react';
import { Building, Landmark, Briefcase } from 'lucide-react';
import { partnersData } from '../data/partners';

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Our Banking <span className="text-gold italic">Partners</span>
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We collaborate with a wide network of trusted financial institutions to ensure you get the most competitive rates and seamless loan processing.
          </p>
        </div>

        {/* Private Banks */}
        <div className="mb-20">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Landmark className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-white">Private Banks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.privateBanks.map((bank, index) => (
              <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
                <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                <span className="text-gray-300 font-medium">{bank}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Public Sector Banks */}
        <div className="mb-20">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Building className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-white">Public Sector Banks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.publicBanks.map((bank, index) => (
              <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
                <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                <span className="text-gray-300 font-medium">{bank}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top NBFCs */}
        <div className="mb-10">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Briefcase className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-white">Top NBFCs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.nbfcs.map((nbfc, index) => (
              <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
                <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                <span className="text-gray-300 font-medium">{nbfc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
