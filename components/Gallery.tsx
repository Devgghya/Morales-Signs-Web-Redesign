import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-safety-orange font-roboto font-bold tracking-[0.2em] uppercase mb-2">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">Featured Projects</h3>
          </div>
          <div className="mt-4 md:mt-0">
             <p className="text-gray-400 max-w-md text-right md:text-right font-roboto">
               A selection of our recent installations across Los Angeles County. From concept to concrete.
             </p>
          </div>
        </div>

        {/* Masonry Grid Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm border border-gray-800">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-safety-orange font-roboto text-sm uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-oswald text-xl uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </h4>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-safety-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#contact" className="inline-block border-b-2 border-safety-orange text-white font-oswald text-lg uppercase tracking-wider pb-1 hover:text-safety-orange transition-colors">
                View Full Portfolio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;