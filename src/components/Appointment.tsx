import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, User, Phone, Sparkles } from 'lucide-react';

export function Appointment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="appointment" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9F8] rounded-3xl p-8 md:p-12 shadow-sm border border-[#FCE7EF]"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-2">Reserve Your Time</h2>
              <p className="text-gray-500 font-poppins text-sm">Book an appointment for a premium salon experience.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm" />
                </div>
                <div className="relative">
                  <Phone className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                  <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm" />
                </div>
              </div>

              <div className="relative">
                <Sparkles className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm appearance-none text-gray-500">
                  <option value="">Select Service</option>
                  <option value="hair-cut">Premium Hair Cut</option>
                  <option value="hair-spa">L'Oréal Hair Spa</option>
                  <option value="smoothening">Hair Smoothening</option>
                  <option value="facial">O3+ / Hydra Facial</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Calendar className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                  <input type="date" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm text-gray-500" />
                </div>
                <div className="relative">
                  <Clock className="absolute top-3 left-4 w-5 h-5 text-gray-400" />
                  <input type="time" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm text-gray-500" />
                </div>
              </div>

              <div>
                <textarea placeholder="Special Requests or Messages" rows={4} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C88A8A] focus:border-transparent outline-none transition-all font-poppins text-sm resize-none"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-gradient-to-r from-[#C88A8A] to-[#E87EA1] hover:from-[#E87EA1] hover:to-[#C88A8A] text-white rounded-xl font-medium font-poppins transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Confirm Appointment
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 aspect-video">
               <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2111&auto=format&fit=crop" 
                alt="Salon Products" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <h3 className="text-2xl font-playfair font-bold text-[#2C2C2C] mb-4">Why Book in Advance?</h3>
            <ul className="space-y-4">
              {[
                "Zero waiting time upon arrival",
                "Dedicated attention from senior stylists",
                "Personalized consultation before treatment",
                "Guaranteed availability of premium products"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#FCE7EF] flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#C88A8A]" />
                  </div>
                  <span className="text-gray-600 font-poppins text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
