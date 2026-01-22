'use client'
import React from 'react';

import { Sparkles, ChevronRight } from 'lucide-react';
import ProcessCircle from './ProcessCircle';

const steps = [
  {
    id: '01',
    title: 'Own Fabric Factory',
    iconSrc: 'factory.svg', 
  },
  {
    id: '02',
    title: 'Own Production Unit',
    iconSrc: '/wheel.svg',
    isHighlighted: true, 
  },
  {
    id: '03',
    title: 'Export Division',
    iconSrc: '/truck.svg',
  },
  {
    id: '04',
    title: 'Warehouse & Storage',
    iconSrc: '/students.svg',
  },
];



export default function DarkSection() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-16">
      
      <div className="flex flex-col items-center text-center mb-20 space-y-6">
        <div className="flex items-center gap-2 text-yellow-400">
          <Sparkles className="w-5 h-5" />
          <span className="text-lg font-medium">What's our infrastructure</span>
        </div>
        <h2 className="text-3xl md:text-3xl  font-medium text-white max-w-4xl leading-tight">
          Our vertically integrated setup gives us complete control over every stage from design to final packing
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
        
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            
            <ProcessCircle {...step} />
            
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-grow h-px border-t-2 border-dashed  border-yellow-400/50 mx-4 relative top-[-30px] z-0"></div>
            )}

          </React.Fragment>
        ))}

      </div>

      <div className="flex justify-center mt-20">
        <button className="flex items-center gap-2 bg-white pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all group">
          <span className="text-black font-normal text-md">Read More</span>
          <div className="bg-yellow-400 p-3 rounded-full text-black group-hover:scale-105 transition-transform">
            <ChevronRight size={24} />
          </div>
        </button>
      </div>

    </section>
  );
}