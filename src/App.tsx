/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Bodywork from './components/Bodywork';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-brand-dark">
      {/* Immersive Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
      
      {/* Subtle Visual Flares */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Brands />
          <Services />
          <WhyUs />
          <Bodywork />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
