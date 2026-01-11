import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-industrial-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-safety-orange font-roboto font-bold tracking-[0.2em] uppercase mb-2">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">Complete Fabrication Services</h3>
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-industrial-dark p-8 border-b-4 border-transparent hover:border-safety-orange transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="mb-6 relative z-10">
                <div className="w-14 h-14 bg-metal-gray rounded flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-black transition-colors duration-300">
                  <service.icon size={32} />
                </div>
              </div>
              
              <h4 className="text-2xl font-oswald font-bold uppercase text-white mb-3 group-hover:text-safety-orange transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-400 font-roboto leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;