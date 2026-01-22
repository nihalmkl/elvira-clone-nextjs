import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  isHighlight?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconSrc, isHighlight = false }) => {
  return (
    <div 
      className={`
        relative p-6 rounded-[24px] flex flex-col gap-3 h-full transition-transform hover:scale-[1.01]
        ${isHighlight ? 'bg-[#F2C94C]' : 'bg-white shadow-sm'}
      `}
    >
      {/* Top Row: Icon and Title Aligned */}
      <div className="flex items-center gap-3">
        <div 
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center shrink-0
            ${isHighlight ? 'bg-white' : 'bg-[#F2C94C]'}
          `}
        >
          <Image 
             src={iconSrc} 
             alt="" 
             width={20} 
             height={20} 
             className="w-5 h-5 object-contain"
          />
        </div>

        <h3 className="text-[17px] font-bold leading-tight text-black">
          {title}
        </h3>
      </div>

      {/* Description below */}
      <div className="flex flex-col">
        <p className={`text-[13px] leading-[1.5] ${isHighlight ? 'text-black/90' : 'text-gray-700'}`}>
          {description}
          <span className="inline-block ml-1 font-bold text-black cursor-pointer hover:underline">
            Read more
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;