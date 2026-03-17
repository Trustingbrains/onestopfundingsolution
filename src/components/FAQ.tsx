import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of loans do you offer?",
    answer: "We offer a comprehensive range of financial products including Home Loans, Personal Loans, Business Loans, Loans Against Property, Working Capital Loans, and specialized Builder/Project Funding."
  },
  {
    question: "Which banks and NBFCs do you partner with?",
    answer: "We have partnered with over 100+ leading financial institutions in India. This includes top private banks (HDFC, ICICI, Axis), public sector banks (SBI, Bank of Baroda), and leading NBFCs (Bajaj Finserv, Tata Capital) to ensure you get the best possible rates."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "The approval timeline varies depending on the loan type and document readiness. Personal loans can often be approved within 24-48 hours, while secured loans like Home Loans or Business Loans typically take 5-7 working days after complete file login."
  },
  {
    question: "Do you charge any consultancy fees from the customer?",
    answer: "Our initial consultation and guidance are completely free. We operate as authorized channel partners for banks and NBFCs, ensuring a transparent and cost-effective process for our clients."
  },
  {
    question: "What is Builder / Project Funding?",
    answer: "It is a specialized service designed for small builders developing low-rise buildings in freehold or approved areas. We help secure construction funding through our network so projects can be completed efficiently without financial bottlenecks."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Common Queries</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Find answers to some of the most common questions about our loan services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-dark-card border-gold/30' : 'bg-black hover:border-gold/20'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left text-lg font-serif text-white pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-gold text-black' : 'bg-dark-card border border-dark-border text-gold'
                }`}>
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
