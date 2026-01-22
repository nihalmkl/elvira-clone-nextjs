import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";


const samsungSharp = localFont({
  src: [
    {
      path: './fonts/samsungsharpsans-medium.otf', 
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/samsungsharpsans-bold.otf',    
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/samsungsharpsans.otf',   
      weight: '300', 
      style: 'normal',
    },
  ],
  variable: '--font-sharp',
});


export const metadata: Metadata = {
    icons: {
        icon: '/icon2.png',
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${samsungSharp.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
