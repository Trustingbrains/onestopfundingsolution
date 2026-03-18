export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <a href="#" className="flex flex-col mb-6">
          <span className="text-gold font-serif font-bold text-2xl leading-none">OneStop Funding</span>
          <span className="text-gold-light text-sm tracking-widest uppercase mt-1">Solutions</span>
        </a>
        
        <p className="text-gold-light font-light text-sm">
          OneStop Funding Solutions • Financial Consulting Services
        </p>

        <p className="text-gold-light font-light text-sm">
          Designed and Developed by <a href="https://trustingbrains.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Trusting Brains</a>
        </p>
        
        <div className="mt-8 flex space-x-6">
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
