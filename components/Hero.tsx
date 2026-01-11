import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Industrial Workshop Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/80 to-transparent"></div>
        {/* Grid texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQgMEgwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-safety-orange text-black font-roboto font-bold px-3 py-1 mb-6 text-sm tracking-widest uppercase">
            Est. 2005 • Lynwood, CA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase leading-none tracking-tight mb-6 text-white drop-shadow-lg">
            LA's Premier <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Signage & Graphic</span> <br/>
            Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-roboto font-light mb-10 max-w-2xl border-l-4 border-safety-orange pl-6">
            From illuminated channel letters to massive vehicle fleets, we build brands that dominate the landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-safety-orange text-black font-oswald text-xl font-bold uppercase tracking-wide hover:bg-white transition-all duration-300">
              <span className="mr-2">Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#gallery" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-oswald text-xl font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;