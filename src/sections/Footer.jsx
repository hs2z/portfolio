import React from 'react';
import { portfolioInfo } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter border-t border-gray-800 py-6 md:py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2 sm:px-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {portfolioInfo.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-end">
            <a 
              href={`https://${portfolioInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a 
              href={`https://${portfolioInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${portfolioInfo.email}`}
              className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Email
            </a>

            <a
               href={`https://wa.me/${portfolioInfo.whatsapp}`}
               className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base"
               > 
               WhatsApp
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


