import { Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <a
        href="tel:9211902004"
        className="group flex items-center justify-center w-14 h-14 bg-gold text-black rounded-full shadow-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-black text-gold text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/30">
          Call Now
        </span>
      </a>
      
      <a
        href="https://wa.me/919211902004"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-black text-[#25D366] text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#25D366]/30">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
