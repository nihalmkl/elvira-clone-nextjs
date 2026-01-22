'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react'; 

const Navbar = () => {
  const navLinks = [
    { name: 'Home', isYellow: true },
    { name: 'About us', isYellow: false },
    { name: 'Categories', isYellow: false },
    { name: 'Why choose us', isYellow: false },
    { name: 'Infrastructure', isYellow: false },
    { name: 'Contact us', isYellow: false },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 bg-transparent border-b-[1px] border-gray-400 ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- 1. LOGO SECTION --- */}
        <Link href="/">
          <div className="cursor-pointer"> 
            <Image 
              src={'/logo.svg'} 
              alt="logo" 
              width={70} 
              height={60}
              className="object-contain"
            />
          </div>
        </Link>

  
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className={`text-sm font-medium cursor-pointer transition-colors ${
                link.isYellow ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              {link.name}
            </div>
          ))}
        </div>

     
        <div className="hidden md:flex">
          <button className="flex items-center bg-white rounded-full pl-5 pr-1 py-1.5 hover:bg-gray-100 transition shadow-sm">
            <span className="text-black font-semibold text-sm mr-3">
              Call us now
            </span>
            <div className="bg-yellow-400 p-2 rounded-full flex items-center justify-center">
              {/* Requires 'npm install lucide-react' */}
              <Phone size={16} className="text-black fill-current" />
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;