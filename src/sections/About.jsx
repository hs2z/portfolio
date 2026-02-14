import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { portfolioInfo } from '../data/content';
import profileImage from '../assets/img/mee2.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
  subtitle="Cybersecurity engineer & MERN Stack Developer"
        />
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 px-2 sm:px-0">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {portfolioInfo.bio}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
              <ul className="space-y-3">
                {portfolioInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm sm:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Additional Content Placeholder */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden order-1 md:order-2">
                            <img 
                              src={profileImage} 
                              alt="Coach Kareem Maged" 
                              className="w-full h-full object-cover rounded-lg"
                            />
                          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


