import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-poppins bg-[#FFF9F8] min-h-screen text-[#2C2C2C] selection:bg-[#FCE7EF] selection:text-[#C88A8A]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50">
        <a 
          href="https://wa.me/918017691859" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#52B788] rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
        >
          💬
        </a>
        <a 
          href="tel:08017691859" 
          className="w-12 h-12 bg-[#C88A8A] rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
        >
          📞
        </a>
      </div>
    </div>
  );
}
