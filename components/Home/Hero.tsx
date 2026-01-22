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

      
        <div className="absolute bottom-0.5 left-0 w-full z-30 leading-[0] transform translate-y-1/2">
          <Image 
            src="/tap.svg" 
            alt="Measuring Tape"
            width={1920} 
            height={120}
            className="w-full h-auto object-cover min-h-[79px]" 
          />
        </div>

      </div>

      
      <div className="relative bg-white w-full z-20 pt-24 pb-0 px-6 flex flex-col items-center text-center mb-0">
        
        <p className="max-w-4xl text-black text-lg md:text-2xl leading-relaxed font-medium mb-10">
          At Elvira, we don’t just make clothes we craft attire that as inspires and confidence
          comfort. With you in every chapter, our collections celebrate 
          each milestone of your journey.
        </p>

        <button className="group flex items-center bg-black text-white rounded-full pl-4 pr-2 py-1 hover:bg-gray-800 transition-all">
        <span className="text-lg font-medium mr-3">Read more</span>
        <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
          <ChevronRight size={20} strokeWidth={2.5} />
        </div>
      </button>

        <div className="mt-20 flex items-center gap-2 text-yellow-600 cursor-pointer hover:text-yellow-700 transition">
          <Sparkles size={20} />
          <span className="text-[15px] font-sans">More from this categories</span>
          
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