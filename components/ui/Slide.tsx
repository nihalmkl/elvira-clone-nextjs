'use client'
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Slide() {
  return (
    <section className="w-full bg-white py-8 flex flex-col items-center overflow-hidden">

      <div className="flex w-full max-w-[1400px] h-[400px] px-4 md:px-10 gap-4 md:gap-6 items-center justify-center">
        
     
        <div className="relative h-full  md:w-[15%] rounded-r-[40px]   overflow-hidden opacity-60 grayscale-[30%]">
          <Image
            src="/slide1.jpg" 
            alt="Corporate Wear"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-full w-[80%] md:w-[70%] rounded-[40px] overflow-hidden shadow-2xl">
       
          <Image
            src="/slide2.jpg" 
            alt="School Uniforms"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16 text-center items-center">
            
            <h3 className="text-white text-3xl md:text-5xl font-medium mb-4 drop-shadow-md">
              School uniforms
            </h3>
            
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
              Give your students a smart, comfortable look that stands up to daily wear. We design 
              and manufacture durable, easy-care school uniforms for pre-primary to senior secondary.
            </p>
            
            {/* Yellow Button */}
            <button className="bg-yellow-400 p-4 rounded-full hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg">
              <ChevronRight size={24} className="text-black" />
            </button>

          </div>
        </div>

      
        <div className="relative h-full  md:w-[15%]  rounded-l-[40px] overflow-hidden opacity-60 grayscale-[30%]">
          <Image
            src="/slide3.jpg" 
            alt="Industrial Safety"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}