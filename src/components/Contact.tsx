import { useState, useEffect, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import SEO from './SEO.tsx';
import { heroImg } from '../data.ts';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Check if store is open right now based on working hours:
  // Monday - Friday: 9am - 6pm (9:00 - 18:00)
  // Saturday: 10am - 4pm (10:00 - 16:00)
  // Sunday: Closed
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0: Sunday, 1: Monday, ... 6: Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const decimalTime = hours + minutes / 60;

      if (day >= 1 && day <= 5) {
        // Monday - Friday
        return decimalTime >= 9 && decimalTime < 18;
      } else if (day === 6) {
        // Saturday
        return decimalTime >= 10 && decimalTime < 16;
      }
      return false; // Sunday or outside
    };

    setIsOpenNow(checkOpenStatus());
    const interval = setInterval(() => {
      setIsOpenNow(checkOpenStatus());
    }, 60000); // check every minute

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      // reset after 6s
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      <SEO 
        title="Contact Us & Consultations" 
        description="Connect with our beauty experts for personalized consultations, organic formulation inquiries, and storefront appointment bookings." 
      />
      
      {/* 1. Header Column */}
      <section className="text-center max-w-xl mx-auto space-y-4 px-4">
        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E] block">
          Get In Touch with Us
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C181C] font-normal tracking-tight">
          We’d Love to <span className="italic text-[#C85C6E]">Hear From You</span>
        </h1>
        <div className="h-px w-12 bg-[#C85C6E] mx-auto" />
        <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
          Have skincare concerns, bulk delivery questions, or looking to collaborate? Our specialists are here to guide you.
        </p>
      </section>

      {/* 2. Main layout grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FCE4E7] rounded-xl p-8 border border-[#C85C6E]/15 space-y-6">
              
              {/* Dynamic open check */}
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-400'}`} />
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] font-sans text-[#2C181C]/80">
                  {isOpenNow ? 'Boutique is Open: Visit us today or call' : 'Boutique is Closed: Leave a message'}
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-6 pt-2">
                <h3 className="font-serif text-xl font-normal text-[#2C181C] text-left">
                  Beauty Hub Headquarters
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF5F6] border border-[#C85C6E]/15 text-[#2C181C] shrink-0">
                      <MapPin className="h-5 w-5 text-[#C85C6E]" />
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#C85C6E] mb-1">
                        Boutique Address
                      </h4>
                      <p className="text-[#2C181C]/80 text-sm font-light leading-relaxed">
                        125 Fashion Street, New Delhi, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF5F6] border border-[#C85C6E]/15 text-[#2C181C] shrink-0">
                      <Phone className="h-5 w-5 text-[#C85C6E]" />
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#C85C6E] mb-1">
                        Direct Phone
                      </h4>
                      <p className="text-[#2C181C]/80 text-sm font-light">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF5F6] border border-[#C85C6E]/15 text-[#2C181C] shrink-0">
                      <Mail className="h-5 w-5 text-[#C85C6E]" />
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#C85C6E] mb-1">
                        Email support
                      </h4>
                      <p className="text-[#2C181C]/80 text-sm font-light">
                        <a href="mailto:support@beautyhub.com" className="hover:underline hover:text-[#C85C6E] transition-all">
                          support@beautyhub.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-6 border-t border-[#C85C6E]/15 space-y-4">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#2C181C] flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#C85C6E]" />
                  Working Hours Recap
                </h4>
                
                <ul className="text-xs space-y-2 text-[#2C181C]/80 font-light">
                  <li className="flex items-center justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-[#2C181C]">9:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-[#2C181C]">10:00 AM – 4:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between text-[#2C181C]/40">
                    <span>Sunday</span>
                    <span className="uppercase text-[9px] font-bold tracking-[0.12em] text-[#C85C6E] bg-[#FFF5F6] px-2 py-0.5 border border-[#C85C6E]/15 rounded-md text-right shrink-0">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Google Map Placeholder */}
            <div className="bg-[#FFF5F6] rounded-xl overflow-hidden h-64 relative border border-[#C85C6E]/15 shadow-xs flex flex-col justify-end p-5">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 filter brightness-95" style={{ backgroundImage: `url(${heroImg})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5F6]/90 to-transparent z-10" />
              <div className="relative z-20 text-[#2C181C] space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-[#C85C6E]">Interactive Location Map</span>
                <p className="text-xs font-light text-[#2C181C]/85">Delhi Premium Retail Block B, Corridor Fashion Str.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FCE4E7] rounded-xl p-8 border border-[#C85C6E]/15 shadow-xs space-y-6">
              
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-normal text-[#2C181C] text-left">
                  Leave a Message
                </h3>
                <p className="text-xs text-[#2C181C]/60 font-light leading-relaxed">
                  Fill out the form below. Our aesthetic specialists answer within 2-4 working hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#FFF5F6] rounded-xl border border-[#C85C6E]/15 flex flex-col items-center justify-center text-center space-y-4 animate-scale-up">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FCE4E7] text-[#2C181C] flex-shrink-0">
                    <CheckCircle className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xl font-semibold text-[#2C181C]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-[#2C181C]/70 font-light text-xs max-w-sm">
                      Thank you for contacting Beauty Hub. An automated support ticket has been registered, and our skincare counselor will contact you.
                    </p>
                  </div>
                  <p className="text-[10px] text-[#2C181C]/40 font-light pt-2">
                    Reloading form soon...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                        Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Bhumi Gupta"
                        className="w-full bg-[#FFF5F6] border border-[#C85C6E]/15 rounded-xl px-4 py-3 text-sm text-[#2C181C] placeholder-[#2C181C]/30 focus:outline-none focus:border-[#C85C6E] transition-all shadow-xs"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                        Email Address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. bhumi@example.com"
                        className="w-full bg-[#FFF5F6] border border-[#C85C6E]/15 rounded-xl px-4 py-3 text-sm text-[#2C181C] placeholder-[#2C181C]/30 focus:outline-none focus:border-[#C85C6E] transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                      Inquiry Subject
                    </label>
                    <select
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FFF5F6] border border-[#C85C6E]/15 rounded-xl px-4 py-3 text-sm text-[#2C181C] focus:outline-none focus:border-[#C85C6E] transition-all shadow-xs cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Skincare Consultation">Skincare Consultation</option>
                      <option value="Shipping and Delivery">Shipping &amp; Delivery</option>
                      <option value="Wholesale Collaboration">Wholesale / Business Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                      Explain your concerns *
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your suggestions, complaints or product requests..."
                      className="w-full bg-[#FFF5F6] border border-[#C85C6E]/15 rounded-xl px-4 py-3 text-sm text-[#2C181C] placeholder-[#2C181C]/30 focus:outline-none focus:border-[#C85C6E] transition-all shadow-xs resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="h-4 w-4 shrink-0" />
                      <span>Submit Inquiry Ticket</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-[#2C181C]/50 font-light text-center">
                    By submitting, you agree to our response policy. Beauty Hub stores clean communication records securely.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
