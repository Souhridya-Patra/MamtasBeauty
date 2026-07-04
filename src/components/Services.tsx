import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Scissors, Sparkles, Droplet, Star } from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: 'Hair Styling & Care',
      icon: <Scissors className="w-6 h-6 text-[#C88A8A]" />,
      services: ['Hair Cut', 'Hair Spa', 'Smoothening & Straightening', 'Hair Coloring', 'Keratin Treatment', 'Hair Styling & Curling']
    },
    {
      title: 'Skin & Facials',
      icon: <Droplet className="w-6 h-6 text-[#C88A8A]" />,
      services: ['O3+ Premium Facial', 'Hydra Facial', 'Cleanup & Detan', 'Skin Treatments', 'Threading & Waxing']
    },
    {
      title: 'Bridal & Makeup',
      icon: <Sparkles className="w-6 h-6 text-[#C88A8A]" />,
      services: ['Bridal Makeup', 'Party Makeup', 'Pre-Bridal Packages', 'Mehendi Design']
    },
    {
      title: 'Nails & Spa',
      icon: <Star className="w-6 h-6 text-[#C88A8A]" />,
      services: ['Manicure', 'Pedicure', 'Nail Art', 'Nail Extensions']
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#1B1B1B] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-3 font-poppins font-bold block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Premium Services</h2>
            <p className="text-white/50 font-poppins max-w-2xl mx-auto text-sm leading-relaxed">
              Curated beauty treatments tailored to perfection, using only the finest products to ensure you look and feel extraordinary.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col border border-white/10 rounded-none p-6 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-playfair mb-4 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex items-center text-white/50 font-poppins text-xs leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] mr-3 opacity-60" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#appointment" className="inline-flex items-center justify-center px-8 py-3 border border-[#C88A8A] rounded-full text-[#C88A8A] hover:bg-[#C88A8A] hover:text-white transition-colors duration-300 font-bold text-[10px] font-poppins uppercase tracking-[0.2em]">
            View Full Menu & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
