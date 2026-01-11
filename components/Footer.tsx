import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('success');
        // Simulate form submission logic
    };

  return (
    <footer id="contact" className="bg-black text-gray-300 pt-20 border-t-8 border-safety-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-oswald font-bold text-white uppercase mb-8">
              Start Your Project
            </h2>
            <p className="font-roboto text-lg mb-10 text-gray-400">
              Ready to elevate your business visibility? Contact Morales Signs & Graphics today for a free consultation and quote.
            </p>

            <div className="space-y-6 font-roboto">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wide">Call Us</h5>
                  <p className="text-lg">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wide">Email Us</h5>
                  <p className="text-lg">{EMAIL_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wide">Visit Shop</h5>
                  <p className="text-lg">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-black transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wide">Hours</h5>
                  <p className="text-lg">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-industrial-dark p-8 md:p-10 border border-gray-800">
             {formStatus === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center">
                     <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-black mb-6">
                         <span className="text-4xl">✓</span>
                     </div>
                     <h3 className="text-2xl font-oswald text-white uppercase mb-2">Message Sent</h3>
                     <p className="font-roboto">We will be in touch with you shortly!</p>
                     <button onClick={() => setFormStatus('idle')} className="mt-6 text-safety-orange underline">Send another</button>
                 </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-oswald text-white uppercase mb-6">Request A Quote</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Name</label>
                        <input type="text" required className="w-full bg-black border border-gray-700 text-white p-3 focus:outline-none focus:border-safety-orange transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone</label>
                        <input type="tel" className="w-full bg-black border border-gray-700 text-white p-3 focus:outline-none focus:border-safety-orange transition-colors" placeholder="(555) 123-4567" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                    <input type="email" required className="w-full bg-black border border-gray-700 text-white p-3 focus:outline-none focus:border-safety-orange transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Project Details</label>
                    <textarea required rows={4} className="w-full bg-black border border-gray-700 text-white p-3 focus:outline-none focus:border-safety-orange transition-colors" placeholder="Tell us about your signage needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-safety-orange text-black font-oswald font-bold text-xl uppercase py-4 hover:bg-white transition-colors duration-300">
                    Send Request
                </button>
                </form>
             )}
          </div>

        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-industrial-black py-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-roboto text-sm text-gray-600">
                &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;