import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-dark-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-gold font-serif font-bold text-2xl leading-none">OneStop Funding</span>
            <span className="text-gold-light text-sm tracking-widest uppercase mt-1">Solutions</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to={isHome ? "#home" : "/"} className="text-gold-light hover:text-gold transition-colors text-sm uppercase tracking-wider">Home</Link>
          <Link to="/loans" className="text-gold-light hover:text-gold transition-colors text-sm uppercase tracking-wider">Loans</Link>
          <Link to="/#about" className="text-gold-light hover:text-gold transition-colors text-sm uppercase tracking-wider">About</Link>
          <Link to="/partners" className="text-gold-light hover:text-gold transition-colors text-sm uppercase tracking-wider">Partners</Link>
          <Link
            to="/contact"
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-sm uppercase tracking-wider rounded-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold hover:text-gold-light focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-dark-border py-4 px-4 flex flex-col space-y-4 shadow-2xl">
          <Link to={isHome ? "#home" : "/"} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold text-lg">Home</Link>
          <Link to="/loans" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold text-lg">Loans</Link>
          <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold text-lg">About</Link>
          <Link to="/partners" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold text-lg">Partners</Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block px-6 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-black transition-all duration-300 rounded-lg"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
