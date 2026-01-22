'use client'
import Image from 'next/image';
import { ChevronRight, Sparkles } from 'lucide-react';
import Slide from '../ui/Slide';
import WhyChooseUs from '../ui/WhyChoose';
import VisionSection from '../ui/VisionSection';
import DarkSection from '../ui/DarkSection';
import SecondLast from '../ui/SecondLast';
import LastSection from '../ui/LastSection';


export default function Home() {
  return (
    <div className="w-full font-sans">
      
 
      <div className="relative h-screen w-full bg-gray-900 flex flex-col justify-center items-center">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png" 
            alt="Sewing Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center w-full select-none pointer-events-none overflow-hidden">
          <h2 className="text-[26vw] leading-none font-bold text-[#FAD12E]  transform translate-y-[10%]">
            elvira
          </h2>
        </div>

     
        <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center -mt-30">
          <p className="text-yellow-100 text-2xl md:text-5xl lg:text-4xl font-normal max-w-5xl  drop-shadow-lg">
            Your trusted partner in fashion,from <br className="hidden md:block" /> 
            classrooms to careers
          </p>
        </div>

      
        <div className="absolute bottom-1 left-0 w-full z-30 leading-[0] transform translate-y-1/2">
          <Image 
            src="/tap.svg" 
            alt="Measuring Tape"
            width={1920} 
            height={120}
            className="w-full h-auto object-cover min-h-[78px]" 
          />
        </div>

      </div>

      
      <div className="relative bg-white w-full z-20 pt-24 pb-10 px-6 flex flex-col items-center text-center">
        
        <p className="max-w-4xl text-black text-lg md:text-2xl leading-relaxed font-medium mb-10">
          At Elvira, we don’t just make clothes we craft attire that inspires confidence and 
          comfort. With you in every chapter, our collections celebrate 
          each milestone of your journey.
        </p>

        <button className="flex items-center gap-4 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all group">
          <span className="text-lg">Read more</span>
          <div className="bg-yellow-400 p-2 rounded-full text-black group-hover:scale-110 transition-transform">
            <ChevronRight size={20} />
          </div>
        </button>

        <div className="mt-19 flex items-center gap-2 text-yellow-600 cursor-pointer hover:text-yellow-700 transition">
          <Sparkles size={20} />
          <span className="text-lg font-medium">More from this categories</span>
          
        </div>
      </div>
        <Slide/>
       
      <WhyChooseUs/>
      <VisionSection/>
       <DarkSection/>
       <SecondLast/>
       <LastSection/>
    </div>
  );
}