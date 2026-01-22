'use client'

import Image from 'next/image';

const LastSection = () => {
  return (
    <section className="relative w-full bg-white pt-15 font-sans">
    
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <div className="bg-[#FACC15] rounded-[40px] md:rounded-[60px] p-8 md:p-10 shadow-xl flex flex-col justify-between min-h-[230px]">
           
           {/* Top Content */}
           <div className="mb-8">
             <h2 className="text-2xl md:text-3xl font-normal text-black mb-4">
               Contact Paruthis Ltd Today..!
             </h2>
             <p className="text-black/80 text-sm md:text-sm max-w-2xl leading-relaxed font-light">
               We believe uniforms do more than cover – they connect people to purpose, protect dignity, and reflect responsibility.
             </p>
           </div>

           
           <div className="flex flex-col md:flex-row gap-3 items-center w-full">
             
             
             <div className="relative w-full md:flex-1">
               <input 
                 type="email" 
                 placeholder="Please enter the mail address" 
                 className="w-full bg-black text-white placeholder-gray-500 rounded-full py-1 px-10 outline-none focus:ring-2 focus:ring-yellow-400/50 h-14 md:h-16"
               />
             </div>

             
             <button className="w-full md:w-auto bg-white text-black font-normal rounded-full py-1 px-6 hover:bg-gray-100 transition-all h-14 md:h-16 whitespace-nowrap shadow-md active:scale-95">
               Send mail
             </button>

           </div>
        </div>
      </div>

    
      <div className="relative w-full h-[150px] md:h-[200px] mt-[-100px] md:mt-[-130px] z-10 overflow-hidden">
       
         <div className="absolute inset-0 z-0">
           <Image 
             src="/blackhill.svg" 
             alt="Footer Background"
             fill
             className="object-cover object-top" 
           />
         </div>
      </div>

    </section>
  );
}

export default LastSection;