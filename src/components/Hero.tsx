import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-dark/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 border border-gold/30 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-gold mr-3 animate-pulse"></span>
              <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">Professional Financial Consultation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-gold leading-[1.1] mb-6">
              All Loan Solutions at <span className="text-gold italic">One Place</span>
            </h1>
            
            <p className="text-xl text-gold-light mb-8 font-light leading-relaxed">
              Professional Loan Consultancy & Builder Funding Partner. We help individuals, businesses, and builders find the best loan options from multiple banks and NBFCs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 rounded-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="flex items-center justify-center px-8 py-4 border border-dark-border text-gold hover:border-gold hover:text-gold transition-all duration-300 uppercase tracking-wider rounded-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Financial Consultation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-gold/30 p-6 rounded-xl max-w-xs">
                <p className="text-gold font-serif text-2xl mb-1">100+</p>
                <p className="text-gold text-sm uppercase tracking-wider">Partner Banks & NBFCs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
