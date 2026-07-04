import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import logo from '../../assets/brand_MamtasBeautyParlour_logo.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1B1B1B] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C88A8A] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4 flex items-center gap-4">
              <img
                src={logo}
                alt="Mamta's Beauty Parlour"
                className="h-20 w-20 rounded-full object-cover shadow-lg shadow-black/30"
              />
              <h3 className="font-playfair text-2xl font-bold tracking-tight text-white">
                Mamta's
                <span className="block text-xs font-poppins tracking-widest text-[#C88A8A] font-medium uppercase mt-1">Beauty Parlour</span>
              </h3>
            </div>
            <p className="text-gray-400 font-poppins text-sm leading-relaxed mb-6">
              Experience the pinnacle of beauty and care in Kolkata. Your destination for luxurious transformations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C88A8A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C88A8A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-white">Explore</h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#C88A8A] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C88A8A] transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-[#C88A8A] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#C88A8A] transition-colors">Gallery</a></li>
              <li><a href="#appointment" className="hover:text-[#C88A8A] transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-white">Premium Services</h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#C88A8A] transition-colors">Bridal Makeovers</a></li>
              <li><a href="#" className="hover:text-[#C88A8A] transition-colors">L'Oréal Hair Spa</a></li>
              <li><a href="#" className="hover:text-[#C88A8A] transition-colors">Keratin Treatment</a></li>
              <li><a href="#" className="hover:text-[#C88A8A] transition-colors">O3+ Facials</a></li>
              <li><a href="#" className="hover:text-[#C88A8A] transition-colors">Skin Therapy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-white">Visit Us</h4>
            <ul className="space-y-4 font-poppins text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#C88A8A] mr-3 flex-shrink-0 mt-0.5" />
                <span>62/69, Haripada Dutta Ln, Rajendra Prasad Colony, Tollygunge, Kolkata - 700033</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#C88A8A] mr-3 flex-shrink-0" />
                <span>08017691859</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#C88A8A] mr-3 flex-shrink-0" />
                <span>Open Daily: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 font-poppins text-xs">
          <p>&copy; {new Date().getFullYear()} Mamta's Beauty Parlour. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Elegance</p>
        </div>
      </div>
    </footer>
  );
}
