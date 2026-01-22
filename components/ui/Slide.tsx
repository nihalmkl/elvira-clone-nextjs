'use client'
import React from 'react';
import Image from 'next/image';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Slide() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center overflow-hidden font-sans">
      
      

      <div className="flex w-full max-w-[1500px] h-[400px] md:h-[400px] px-4 md:px-0 gap-4 md:gap-6 items-center justify-center">
        
       
        <div className="relative h-full w-[15%] md:w-[15%] rounded-r-[40px] overflow-hidden opacity-100">
          <Image
            src="/slide1.jpg" 
            alt="Corporate Wear"
            fill
            className="object-cover grayscale-[30%]"
          />
        </div>

        <div className="relative h-full w-[70%] md:w-[65%] rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src="/slide2.jpg" 
            alt="School Uniforms"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end pb-12 px-8 md:px-16">
            
            <div className="relative flex items-end justify-center w-full">
               
               <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
                 <h3 className="text-white text-3xl md:text-4xl font-medium mb-4 drop-shadow-lg">
                   School uniforms
                 </h3>
                 <p className="text-gray-200 text-sm  leading-relaxed drop-shadow-md">
                   Give your students a smart, comfortable look that stands up to daily wear. We design 
                   and manufacture durable, easy-care school uniforms for pre-primary to senior secondary
                 </p>
               </div>

               <button className="absolute right-[-19px] bottom-10 bg-yellow-400 p-4 md:p-2 rounded-full hover:bg-yellow-300 transition-transform hover:scale-110 shadow-lg flex-shrink-0">
                 <ChevronRight size={28} className="text-black" />
               </button>

            </div>

          </div>
        </div>

        <div className="relative h-full w-[15%] md:w-[15%] rounded-l-[40px] overflow-hidden opacity-100">
          <Image
            src="/slide3.jpg" 
            alt="Industrial Safety"
            fill
            className="object-cover grayscale-[30%]"
          />
        </div>

      </div>
    </section>
  );
}