'use client'
import React from 'react';
import FeatureCard from './FeatureCard'; 
import { Sparkles, ChevronRight } from 'lucide-react'; 

const features = [
  {
    id: 1,
    title: 'Won fabric unit',
    description: 'Right from yarn to finished fabric, we manage the entire process ourselves. This allows us to maintain consistency, ensure durability, and deliver only the best quality',
    iconSrc: '/ovalshape.svg', 
    isHighlight: true,
  },
  {
    id: 2,
    title: 'In - house production',
    description: 'Every stage of production, from cutting to stitching finishing, is done under one roof. This guarantees better coordination, efficiency, and faster turnaround times.',
    iconSrc: '/tailor.svg',
  },
  {
    id: 3,
    title: 'In - house design services',
    description: 'At Paruthis Uniforms, we don’t just stitch uniforms we make the very fabric they’re built from. With our dedicated in-house',
    iconSrc: '/mark.svg',
  },
  {
    id: 4,
    title: 'Fully customizable',
    description: 'At Paruthis Uniforms, we don’t just stitch uniforms we make the very fabric they’re built from. With our dedicated in-house',
    iconSrc: '/compass.svg',
  },
  {
    id: 5,
    title: 'Lesser lead time',
    description: 'At Paruthis Uniforms, we don’t just stitch uniforms we make the very fabric they’re built from. With our dedicated in-house',
    iconSrc: '/fire.svg',
  },
  {
    id: 6,
    title: 'Quick delivery',
    description: 'At Paruthis Uniforms, we don’t just stitch uniforms we make the very fabric they’re built from. With our dedicated in-house',
    iconSrc: '/lorry.svg',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-10 lg:px-16 font-sans">
      
      <div className="w-full mb-12">
        <div className="flex items-center gap-2 mb-4">
           <Sparkles className="w-5 h-5 text-black" />
           <span className="text-black font-medium">Why choose us?</span>
        </div>
        
        <h2 className="text-3xl md:text-3xl font-medium text-black leading-tight max-w-4xl">
          Excellence in Every Stitch From design to doorstep, everything—so you get hassle-free service, superior quality, and value for money.
        </h2>
      </div>


      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            iconSrc={feature.iconSrc} 
            isHighlight={feature.isHighlight}
          />
        ))}
      </div>

   
      <div className="flex justify-center">
        <button className="flex items-center gap-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all group">
          <span className="text-lg font-medium">Read more</span>
          <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
          <ChevronRight size={20} strokeWidth={2.5} />
        </div>
        </button>
      </div>

    </section>
  );
}