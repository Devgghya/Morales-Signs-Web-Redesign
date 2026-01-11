import React from 'react';
import { CLIENTS, FOUNDED_YEAR } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-metal-gray py-12 border-t border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-oswald uppercase text-white tracking-wide">
              Trusted by Local Businesses
            </h4>
            <p className="text-safety-orange font-roboto">
              Serving Lynwood & Greater LA Since {FOUNDED_YEAR}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {CLIENTS.map((client) => (
               <div key={client.id} className="flex items-center gap-2 group">
                 <div className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center font-bold text-gray-400 group-hover:border-white group-hover:text-white transition-colors">
                    {client.initial}
                 </div>
                 <span className="font-oswald text-lg font-bold text-gray-500 hidden sm:block group-hover:text-white transition-colors">{client.name}</span>
               </div>
             ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TrustBar;