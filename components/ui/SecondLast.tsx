'use client'
import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react'; 

const SecondLast = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col space-y-4">
    
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-black text-sm font-medium uppercase tracking-wider">Our ideology</span>
          </div>

         
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            At Paruthis Uniforms our ideology is simple: every thread carries a promise. 
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
            We design and deliver uniforms that do three things – respect the wearer, 
            represent the institution, and reduce environmental impact.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            We envision a future where every uniform we create not only enhances identity and 
            confidence but also reflects a commitment to comfort, durability, and responsibility 
            towards our people and the planet.
          </p>

        </div>

        <div className="relative h-[500px] w-full">
           
           <div className="absolute top-0 left-0 w-[85%] h-[350px] rounded-[30px] overflow-hidden shadow-xl z-10">
             <Image
               src="/dress.png" 
               alt="Uniforms on rack"
               fill
               className="object-cover"
             />
           </div>

           <div className="absolute bottom-0 right-0 w-[55%] h-[250px] rounded-[30px] overflow-hidden shadow-2xl z-20 border-[1px] border-white">
             <Image
               src="/machine.png" 
               alt="Production machine"
               fill
               className="object-cover"
             />
           </div>

        </div>

      </div>
    </section>
  );
}

export default SecondLast;