// Reusable Component for each step in the process
import Image from 'next/image';
import { deflate } from 'node:zlib';


const ProcessCircle = ({ id, title, iconSrc, isHighlighted = false }: { id: string, title: string, iconSrc: string, isHighlighted?: boolean }) => {
  return (
    <div className="flex flex-col items-center text-center z-10">
 
      <div className="relative">
    
        <div className="absolute -top-2 -left-4 w-10 h-10 rounded-full border-2 border-yellow-400 bg-black flex items-center justify-center text-white font-medium text-sm z-20">
          {id}
        </div>

        <div 
          className={`
            w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-black transition-all duration-500
            ${isHighlighted ? 'shadow-[0_0_50px_15px_rgba(250,204,21,0.6)] scale-105' : ''}
          `}
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src={iconSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Step Title */}
      <h3 className="text-white text-lg md:text-sm font-medium mt-6 max-w-[180px]">
        {title}
      </h3>
    </div>
  );
};

export default ProcessCircle