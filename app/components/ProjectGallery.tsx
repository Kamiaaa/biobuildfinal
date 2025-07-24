'use client';

import Image from 'next/image';
import React from 'react';

const cards = [
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-01.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-02.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-03.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-04.jpg',
  },
];

const ProjectGallery: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 w-full justify-center mt-20">
      <h1 className="text-3xl text-center font-poppins text-gray-700">Turning Ordinary Into Extraordinary!</h1>
      {/* <p className="text-center text-gray-700">
        Each of the cards have texts descriptions, which get displayed when you hover the images. Just some dummy texts.
      </p> */}

      <section className="flex flex-wrap gap-10 w-full justify-center items-center">
        {cards.map((card, index) => (
          <div key={index} className="relative group w-70">
            <span className="flex flex-col justify-center items-center">
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                width={320}
                height={240}
                className="w-full h-full object-cover rounded-lg"
              />
              <h1 className="-mt-10 text-xl font-poppins font-semibold bg-black text-white w-full py-2 text-center">
                {card.title}
              </h1>
            </span>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-70 transition-opacity duration-300 p-5 text-center font-sans">
              <h2 className="text-xl font-bold text-gray-100">JUST BEFORE TAKE-OFF</h2>
              <p className="text-gray-50 text-lg mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem quaerat explicabo, voluptatum,
                assumenda placeat reiciendis aliquid itaque voluptates facere odit laboriosam, exercitationem aperiam
                labore dolorem quasi quia minima. Fugiat maxime, molestias molestiae aliquid animi
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectGallery;
