import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bridal Client",
      content: "I booked Mamta's for my bridal makeup and it was the best decision. The makeup was flawless, extremely premium, and the staff was so patient and professional.",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      role: "Regular Client",
      content: "The best hair spa in Tollygunge! I've been coming here for 3 years. Their L'Oréal hair treatments and hygiene standards are unmatched.",
      rating: 5
    },
    {
      name: "Roshni Sen",
      role: "Skin Care Client",
      content: "Got an O3+ facial done. The glow lasted for weeks. The salon is incredibly luxurious and relaxing. Highly recommend to everyone in Kolkata.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#FFF9F8] relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C88A8A" d="M47.7,-57.2C59.5,-45.5,65.3,-27.4,66.8,-9.5C68.4,8.5,65.7,26.4,55.9,40.1C46.1,53.8,29.3,63.3,10.6,67.6C-8.2,71.8,-28.9,70.9,-44.7,59.9C-60.6,48.9,-71.5,27.8,-73.4,7.4C-75.3,-13.1,-68.2,-33,-54.6,-45.6C-41.1,-58.2,-20.5,-63.5,-1.3,-62C17.9,-60.5,35.9,-68.8,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C88A8A] font-poppins tracking-widest text-sm font-medium uppercase mb-4 block">Client Diaries</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-6">Words of Elegance</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-2xl font-bold">4.9</span>
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <p className="text-gray-500 font-poppins text-sm uppercase tracking-wide">Based on 839+ Google Reviews</p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-4">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative h-full border border-gray-100">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-[#FCE7EF] opacity-50" />
                  <div className="flex gap-1 text-[#D4AF37] mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 font-poppins leading-relaxed mb-8 relative z-10 font-light italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C88A8A] to-[#E87EA1] flex items-center justify-center text-white font-bold font-playfair text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-[#2C2C2C]">{testimonial.name}</h4>
                      <p className="text-xs font-poppins text-gray-500 uppercase">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
