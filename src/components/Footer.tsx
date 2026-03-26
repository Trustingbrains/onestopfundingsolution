export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-3 mb-6">
          <img
            src="/images/loogo.png"
            alt="OneStop Funding Solutions Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-gold font-serif font-bold text-2xl leading-none">OneStop Funding</span>
            <span className="text-gold-light text-sm tracking-widest uppercase mt-1">Solutions</span>
          </div>
        </a>

        <p className="text-gold-light font-light text-sm">
          OneStop Funding Solutions • Financial Consulting Services
        </p>

        <p className="text-gold-light font-light text-sm">
          Designed and Developed by <a href="https://trustingbrains.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Trusting Brains</a>
        </p>
        
        {/* <div className="mt-8 flex space-x-6">
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300">
            Terms of Service
          </a>
        </div> */}
      </div>
    </footer>
  );
}