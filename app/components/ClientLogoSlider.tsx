'use client';

import Image from 'next/image';

const logos = [
  '/img/clients/1-1.jpg',
  '/img/clients/5.jpg',
  '/img/clients/12.jpg',
  '/img/clients/7-1.jpg',
  '/img/clients/11.jpg',
  '/img/clients/4-1.jpg',
  '/img/clients/3-1.jpg',
];

export default function ClientLogoSlider() {
  const duplicatedLogos = [...logos, ...logos]; // Repeat for smooth loop

  return (
    <div className="container mx-auto max-w-5xl overflow-hidden bg-white py-8">
      <div className="slider-track flex w-[200%] animate-slide">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="w-40 h-20 flex items-center justify-center flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
