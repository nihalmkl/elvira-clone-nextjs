'use client'
import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] z-0 pointer-events-none opacity-[0.08]">
         <Image 
           src="/tap.svg" 
           alt="Background Tape"
           fill
           className="object-contain rotate-[28deg]"
         />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
      
        <div className="relative h-[500px] w-full">
           
       
           <div className="absolute top-0 left-0 w-[65%] h-[400px] rounded-[30px] overflow-hidden shadow-lg z-10">
             <Image
               src="/vision1.png" 
               alt="Factory"
               fill
               className="object-cover"
             />
           </div>

           
           <div className="absolute bottom-0 right-0 w-[65%] h-[300px] rounded-[30px] overflow-hidden shadow-2xl z-20 border-[1px] border-white">
             <Image
               src="/vision2.png" 
               alt="Fabric"
               fill
               className="object-cover"
             />
           </div>
        </div>

  
        <div className="flex flex-col justify-center space-y-6">
           
       
           <div className="flex items-center gap-2">
             <Sparkles className="w-5 h-5 text-black" />
             <span className="text-black text-base font-medium">Our vision</span>
           </div>

           <h2 className="text-2xl md:text-3xl lg:text-xl font-normal text-black leading-[1.3]">
             Our vision is to be the most trusted one-stop solution for all garment needs, 
             bringing fabric, d together under one roof. We strive to 
             deliver innovation, quality, and value with every order, making the process
           </h2>

        
           <div className="pt-2 ">
             <p className="text-gray-700 text-sm md:text-sm font-light leading-relaxed max-w-lg">
               seamless for our customers. Our goal is to build long-lasting relationships by 
               consistently exceeding expectations
             </p>
           </div>

        </div>

      </div>
    </section>
  );
}