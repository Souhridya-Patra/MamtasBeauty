import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '839+', label: 'Google Reviews' },
    { value: '1000+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF9F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
                alt="Mamta's Beauty Parlour Interior" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FCE7EF] rounded-full -z-10 blur-2xl" />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C88A8A] to-[#E87EA1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4.9
                </div>
                <div>
                  <div className="flex text-[#D4AF37] text-sm">
                    ★★★★★
                  </div>
                  <div className="text-xs font-poppins text-gray-500 font-medium uppercase mt-1">Google Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C88A8A]" />
              <span className="text-[#C88A8A] font-poppins tracking-widest text-sm font-medium uppercase">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] leading-tight mb-6">
              Elevating Your Beauty Experience in <span className="italic text-[#C88A8A]">Tollygunge</span>
            </h2>
            
            <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6 font-light">
              Welcome to Mamta's Beauty Parlour, a sanctuary of elegance and professional care. We believe that beauty is personal, and our mission is to enhance your natural glow with our tailored treatments.
            </p>
            
            <p className="text-gray-600 font-poppins leading-relaxed mb-10 font-light">
              Equipped with modern technology and premium products from global brands like L'Oréal, Matrix, and O3+, our experienced professionals provide a hygienic, comfortable, and truly luxurious salon experience.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-1">{stat.value}</span>
                  <span className="text-sm font-poppins text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
