import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const previewPartners = [
  { name: "HDFC Bank", logo: "https://img.logo.dev/hdfc.bank.in?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "HDFC Bank logo" },
  { name: "State Bank of India", logo: "https://img.logo.dev/sbi.bank.in?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "SBI logo" },
  { name: "ICICI Bank", logo: "https://img.logo.dev/icici.bank.in?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "ICICI Bank logo" },
  { name: "Bajaj Finserv", logo: "https://img.logo.dev/bajajfinserv.in?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "Bajaj Finserv logo" },
  { name: "Axis Bank", logo: "https://img.logo.dev/axis.bank.in?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "Axis Bank logo" },
  { name: "Tata Capital", logo: "https://img.logo.dev/tata.com?token=pk_ScuFJ2FSTsSLrzeOoO-LmQ", alt: "Tata Capital logo" }
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Network</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Trusted Banking Partners
          </h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We have partnered with India's leading private banks, public sector banks, and top NBFCs to bring you the best financial products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {previewPartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-black border border-dark-border rounded-xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 mb-3 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/partners"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 rounded-lg group"
          >
            View All Partners
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
