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
        relative px-5 py-3 rounded-[18px] h-full transition-transform hover:scale-[1.01]
        ${isHighlight ? 'bg-[#F2C94C]' : 'bg-white shadow-sm'}
      `}
    >
      {/* Main Flex Container: Aligns Icon (Left) and Content (Right) side-by-side */}
      <div className="flex items-start gap-3">
        
        {/* Left Side: Icon Box */}
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

        {/* Right Side: Text Stack (Heading + Description) */}
        <div className="flex flex-col gap-1.5 pt-0.5">
          <h3 className="text-[16px] font-normal leading-tight text-black">
            {title}
          </h3>

          <p className={`text-[11px] font-base leading-[1.6] ${isHighlight ? 'text-black/90' : 'text-gray-700'}`}>
            {description}
            <span className="inline-block ml-1 font-bold text-black cursor-pointer hover:underline">
              Read more
            </span>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureCard;