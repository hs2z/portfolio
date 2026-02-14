import React from 'react';
import Button from '../components/Button';
import { portfolioInfo } from '../data/content';
import profileImage from '../assets/img/me.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-90"></div>
      
      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white mb-3 md:mb-4 leading-tight break-words">
              <span className="block">{portfolioInfo.name.split(' ').slice(0, 2).join(' ')}</span>
              {portfolioInfo.name.split(' ').length > 2 && (
                <span className="block sm:ml-2">{portfolioInfo.name.split(' ').slice(2).join(' ')}</span>
              )}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-3 md:mb-4 px-2 sm:px-0">
              {portfolioInfo.headline}
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 px-2 sm:px-0">
              {portfolioInfo.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-2 sm:px-0">
              <a
                href="#contact"
              >
                <Button  size="lg" fullWidth className="sm:w-auto" >      
                     
                  <div className="flex flex-col items-center text-center">
                  <a
               href={`https://wa.me/${portfolioInfo.whatsapp}`} > 
                    <h3 className="text-lg font-bold text-white mb-2">Contact Me</h3>
                    <p className="text-gray-400 text-sm">{portfolioInfo.whatsapp}</p>
                    </a>
                  </div>
                </Button>
              </a>
              <a
                href="#projects"
              >
                <Button size="lg" variant="outline" fullWidth className="sm:w-auto" >            
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-2">View Projects</h3>
                    <p className="text-gray-400 text-sm">See my work</p>
                  </div>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden mt-4 md:mt-0">
            <img 
              src={profileImage} 
              alt="Mohamed - Cyber Security Engineer & MERN Stack Developer" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
      



