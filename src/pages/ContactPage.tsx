import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'Personal Loan',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: 'New Contact Form Submission - OneStop Funding',
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          interest: formData.interest,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', interest: 'Personal Loan', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Get in Touch</h2>
            <h1 className="text-4xl md:text-5xl font-serif text-gold mb-6 leading-tight">
              Connect with <span className="text-gold italic">OneStop</span> Funding Solutions
            </h1>
            <p className="text-gold-light text-lg font-light leading-relaxed mb-12">
              Reach out to us via phone, email, or visit our office. We aim to respond to all inquiries within 24 business hours.
            </p>

            <div className="space-y-6">
              {/* Phone Card */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-2xl flex items-start group hover:border-gold/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-gold font-serif text-xl mb-2">Phone</h3>
                  <p className="text-gold-light font-light mb-1">Direct: +91 9211902004</p>
                  <p className="text-gold-light font-light">WhatsApp: +91 9211902004</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-2xl flex items-start group hover:border-gold/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-gold font-serif text-xl mb-2">Email</h3>
                  <p className="text-gold-light font-light mb-1">Support: onestopfundingsolutions07@gmail.com</p>
                  <p className="text-gold-light font-light">Sales: onestopfundingsolutions07@gmail.com</p>
                </div>
              </div>

              {/* Office Card */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-2xl flex items-start group hover:border-gold/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-gold font-serif text-xl mb-2">Office</h3>
                  <p className="text-gold-light font-light mb-1">Golden I</p>
                  <p className="text-gold-light font-light">Greater Noida West</p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-2xl flex items-start group hover:border-gold/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-gold font-serif text-xl mb-2">Business Hours</h3>
                  <p className="text-gold-light font-light mb-1">Mon - Sat: 9:30 AM - 6:30 PM IST</p>
                  <p className="text-gold-light font-light">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/5 rounded-3xl transform translate-x-2 translate-y-2"></div>
            <div className="bg-dark-card border border-dark-border p-8 md:p-10 rounded-3xl shadow-2xl relative z-10">
              <h3 className="text-2xl font-serif text-gold mb-8">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gold-light mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gold-light mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-light mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gold-light mb-2">I'm interested in</label>
                  <div className="relative">
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-black border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300 appearance-none"
                    >
                      <option>Personal Loan</option>
                      <option>Home Loan</option>
                      <option>Business Loan</option>
                      <option>Loan Against Property</option>
                      <option>Working Capital Loan</option>
                      <option>Builder / Project Funding</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gold-light mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                {status === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl flex items-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-sm">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center text-red-400">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gold text-black font-semibold uppercase tracking-wider py-4 rounded-xl hover:bg-gold-light transition-colors duration-300 mt-4 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  {status !== 'submitting' && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
