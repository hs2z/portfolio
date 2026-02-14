import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { portfolioInfo } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss your next secure project"
        />
        
        <div className="max-w-2xl mx-auto px-2 sm:px-0">
          <div className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Email</h3>
                <a href={`mailto:${portfolioInfo.email}`} className="text-primary hover:text-primary-dark transition-colors text-sm sm:text-base break-all">
                  {portfolioInfo.email}
                </a>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">LinkedIn</h3>
                <a href={`https://${portfolioInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors text-sm sm:text-base break-all">
                  {portfolioInfo.linkedin}
                </a>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">GitHub</h3>
                <a href={`https://${portfolioInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors text-sm sm:text-base break-all">
                  {portfolioInfo.github}
                </a>
              </div>
              
              <div className="pt-4">
              <a href={`https://wa.me/${portfolioInfo.whatsapp}`} > 
                  <Button size="lg" fullWidth>
                    Send Message
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


