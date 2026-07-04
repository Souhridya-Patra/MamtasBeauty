import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-20 flex flex-col md:flex-row min-h-[768px] overflow-hidden bg-[#FFF9F8]">
      
      {/* Left Branding Column */}
      <div className="w-full md:w-1/2 px-8 md:pl-20 py-16 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="mb-4 inline-flex items-center space-x-2 text-[#D4AF37]">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-poppins font-bold">Est. Tollygunge 2010</span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl leading-[1.05] mb-6 text-[#2C2C2C]">
            Where Beauty <br />
            <span className="text-[#C88A8A] italic">Meets Perfection</span>
          </h1>
          
          <p className="font-poppins text-lg text-[#2C2C2C]/70 max-w-md leading-relaxed mb-8">
            Experience premium beauty, hair, skin & bridal services in a luxurious, hygienic, and relaxing environment. Let our experts reveal your best self.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#appointment"
              className="px-8 py-3 bg-gradient-to-r from-[#C88A8A] to-[#E87EA1] text-white text-xs uppercase tracking-widest font-poppins font-bold rounded-full shadow-lg shadow-[#C88A8A]/20 transition-transform active:scale-95 hover:shadow-xl inline-flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book Appointment</span>
            </a>
            <a 
              href="tel:08017691859"
              className="px-8 py-3 text-[#2C2C2C] border border-[#2C2C2C]/20 rounded-full hover:bg-white/50 backdrop-blur-sm transition-all text-xs uppercase tracking-widest font-poppins font-bold inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>08017691859</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#2C2C2C]">4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold font-poppins">839+ Google Reviews</span>
            </div>
            <div className="w-px h-10 bg-[#FCE7EF]"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#2C2C2C]">1k+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold font-poppins">Satisfied Clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-full">
        <div className="hidden md:block absolute inset-0 bg-[#FCE7EF]/30 skew-x-[-12deg] translate-x-12 origin-top z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[400px] md:w-[420px] md:h-[540px] rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden bg-[#1B1B1B] z-10">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format&fit=crop"
            alt="Salon Service"
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          />
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-4 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-2xl z-0"></div>
        <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-[#C88A8A]/10 blur-3xl z-0"></div>
      </div>
    </section>
  );
}
