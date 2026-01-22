'use client'
import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'; 

export default function Footer() {
  return (
    <div className="relative w-full bg-white font-sans">
      <footer className="relative w-full bg-black pt-16 pb-0 mt-0 overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-white">

           <div className="space-y-6">
              {/* Logo SVG */}
              <div className="w-32 h-24 relative">
                 <Image src="/logo.svg" alt="Elvira Logo" fill className="object-contain object-left"/>
              </div>
              
              <p className="text-lg font-normal tracking-wide">Craft with Purpose. Dress with Pride</p>

              <div className="pt-4">
                <h4 className="text-xl font-medium mb-4">Social media</h4>
                <div className="flex gap-4">
                   <div className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"><Instagram size={20}/></div>
                   <div className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"><Facebook size={20}/></div>
                   <div className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"><Twitter size={20}/></div>
                   <div className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"><Linkedin size={20}/></div>
                </div>
              </div>

              <div className="text-gray-400 text-sm space-y-2 pt-4">
                 <p className="leading-relaxed">
                   At Paruthis Uniforms our ideology is simple every thread carries a promise. 
                   We design and deliver
                 </p>
                 <p className="text-white/50 text-xs mt-4">©All Rights Reserved by elvira- 2025</p>
              </div>
           </div>

           <div className="pt-4">
              <h4 className="text-2xl font-medium mb-6">Company</h4>
              <ul className="space-y-4 text-gray-300 text-base">
                 <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">About us</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">Why choose us</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">Infrastructure</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
              </ul>
           </div>

           <div className="pt-4">
              <h4 className="text-2xl font-medium mb-6">Products</h4>
              <ul className="space-y-4 text-gray-300 text-base">
                 <li className="hover:text-yellow-400 cursor-pointer transition">School</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">Corporate</li>
                 <li className="hover:text-yellow-400 cursor-pointer transition">Customized</li>
              </ul>
           </div>

           <div className="pt-4">
              <h4 className="text-2xl font-medium mb-6">Location</h4>
              <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                 <p>
                   Registered Office – MIG No.306, TNHB Phase II, 
                   3rd Main road, Nolambur, Chennai, Tamilnadu – 600037
                 </p>
                 <p>
                   Registered Office – MIG No.306, TNHB Phase II, 
                   3rd Main road, Nolambur, Chennai, Tamilnadu – 600037
                 </p>
                 <div className="text-base text-white font-medium pt-2">
                    <p>044-2653 4559 / 044-2653 6559</p>
                    <p className="text-yellow-400 mt-1">support@elvira.co.in</p>
                 </div>
              </div>
           </div>
          
        </div>
        
        <div className="relative w-full flex justify-center items-end leading-[0]">
           <div className="w-full max-w-[90%] md:max-w-full border-t-1 border-gray-900">
             <Image
               src="/frontpagetext.svg" 
               alt="ELVIRA"
               width={1400}
               height={300}
               className="w-full h-auto object-cover"
             />
           </div>
        </div>

      </footer>
    </div>
  );
}