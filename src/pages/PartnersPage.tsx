// import { useEffect } from 'react';
// import { Building, Landmark, Briefcase } from 'lucide-react';
// import { partnersData } from '../data/partners';

// export default function PartnersPage() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h1 className="text-5xl md:text-6xl font-serif text-gold mb-6 leading-tight">
//             Our Banking <span className="text-gold italic">Partners</span>
//           </h1>
//           <p className="text-gold-light text-lg font-light leading-relaxed">
//             We collaborate with a wide network of trusted financial institutions to ensure you get the most competitive rates and seamless loan processing.
//           </p>
//         </div>

//         {/* Private Banks */}
//         <div className="mb-20">
//           <div className="flex items-center mb-8 border-b border-dark-border pb-4">
//             <Landmark className="w-8 h-8 text-gold mr-4" />
//             <h2 className="text-3xl font-serif text-gold">Private Banks</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {partnersData.privateBanks.map((bank, index) => (
//               <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
//                 <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
//                 <span className="text-gold-light font-medium">{bank}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Public Sector Banks */}
//         <div className="mb-20">
//           <div className="flex items-center mb-8 border-b border-dark-border pb-4">
//             <Building className="w-8 h-8 text-gold mr-4" />
//             <h2 className="text-3xl font-serif text-gold">Public Sector Banks</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {partnersData.publicBanks.map((bank, index) => (
//               <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
//                 <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
//                 <span className="text-gold-light font-medium">{bank}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top NBFCs */}
//         <div className="mb-10">
//           <div className="flex items-center mb-8 border-b border-dark-border pb-4">
//             <Briefcase className="w-8 h-8 text-gold mr-4" />
//             <h2 className="text-3xl font-serif text-gold">Top NBFCs</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {partnersData.nbfcs.map((nbfc, index) => (
//               <div key={index} className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center">
//                 <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
//                 <span className="text-gold-light font-medium">{nbfc}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















import { useEffect, useState } from 'react';
import { Building, Landmark, Briefcase } from 'lucide-react';
import { partnersData } from '../data/partners';

function BankCard({ name, domain }: { name: string; domain: string }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = `https://img.logo.dev/${domain}?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ&size=60&format=png`;

  return (
    <div className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-110 transition-all duration-300">
        {!imgError ? (
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback: gold initial if logo fails to load
          <span className="text-xl font-bold text-gold">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-gold-light font-medium text-sm leading-snug">{name}</span>
    </div>
  );
}

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-gold mb-6 leading-tight">
            Our Banking <span className="text-gold italic">Partners</span>
          </h1>
          <p className="text-gold-light text-lg font-light leading-relaxed">
            We collaborate with a wide network of trusted financial institutions to ensure you get the most competitive rates and seamless loan processing.
          </p>
        </div>

        {/* Private Banks */}
        <div className="mb-20">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Landmark className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-gold">Private Banks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.privateBanks.map((bank, index) => (
              <BankCard key={index} name={bank.name} domain={bank.domain} />
            ))}
          </div>
        </div>

        {/* Public Sector Banks */}
        <div className="mb-20">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Building className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-gold">Public Sector Banks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.publicBanks.map((bank, index) => (
              <BankCard key={index} name={bank.name} domain={bank.domain} />
            ))}
          </div>
        </div>

        {/* Top NBFCs */}
        <div className="mb-10">
          <div className="flex items-center mb-8 border-b border-dark-border pb-4">
            <Briefcase className="w-8 h-8 text-gold mr-4" />
            <h2 className="text-3xl font-serif text-gold">Top NBFCs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersData.nbfcs.map((nbfc, index) => (
              <BankCard key={index} name={nbfc.name} domain={nbfc.domain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}