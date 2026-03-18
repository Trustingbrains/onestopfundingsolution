const steps = [
  {
    number: '01',
    title: 'Understanding Customer Requirement',
    description: 'We listen to your needs and financial goals to find the perfect fit.',
  },
  {
    number: '02',
    title: 'Document Collection & Eligibility',
    description: 'We check your eligibility and collect necessary documents for processing.',
  },
  {
    number: '03',
    title: 'File Login With Banks/NBFCs',
    description: 'We submit your application to the best suited financial institutions.',
  },
  {
    number: '04',
    title: 'Approval & Loan Disbursement',
    description: 'Fast approval process and quick disbursement of funds to your account.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Simple & Transparent</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gold mb-6 leading-tight">
            Our Loan Process
          </h3>
          <p className="text-gold-light text-lg font-light leading-relaxed">
            We have streamlined our process to ensure you get your loan approved and disbursed as quickly and smoothly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-black border border-dark-border rounded-2xl group hover:border-gold/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <span className="text-5xl font-serif font-bold text-dark-border group-hover:text-gold/20 transition-colors duration-500 block mb-6">
                  {step.number}
                </span>
                
                <h4 className="text-xl font-serif text-gold mb-4 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h4>
                
                <p className="text-gold-light font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
