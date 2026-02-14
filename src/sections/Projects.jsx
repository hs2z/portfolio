import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ImageModal from '../components/ImageModal';
import project1 from '../assets/img/c.jpeg';
import project2 from '../assets/img/c2.jpeg';
import project3 from '../assets/img/c3.jpeg';
import project4 from '../assets/img/c4.jpeg';
import project5 from '../assets/img/cf1.jpeg';
import project6 from '../assets/img/cf2.jpeg';
import project7 from '../assets/img/cf3.jpeg';
import project8 from '../assets/img/cf4.jpeg';
import project9 from '../assets/img/cf5.jpeg';
import project10 from '../assets/img/cf6.jpeg';
import project11 from '../assets/img/cf7.jpeg';
import project12 from '../assets/img/cy1.jpeg';
import project13 from '../assets/img/cy2.jpeg';
import project14 from '../assets/img/cy3.jpeg';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Projects array with images and metadata
  const projects = [
    { 
      id: 1, 
      src: project1, 
      title: ' AI - CNC Platform', 
      description: 'Advanced CNC FullWebSite For 3 apps IN 1 WebSite',
      link: '#'
    },
    { 
      id: 2, 
      src: project2, 
      title: '3 Web Applications', 
      description: ' IMAge Generator - image convertor - Chatbot ',
      link: '#'
    },
    { 
      id: 3, 
      src: project3, 
      title: 'AI Chatbot ', 
      description: 'AI Chatbot For AI - CNC Platform',
      link: '#'
    },
    { 
      id: 4, 
      src: project4, 
      title: 'Python script convertor', 
      description: 'image convertor w python script to g code for CNC Machine',
      link: '#'
    },
    { 
      id: 5, 
      src: project5, 
      title: 'coffee shop website', 
      description: ' Fully Responsive Coffee Shop Website with Admin Panel & Payment Gateway & Online Ordering System ',
      link: '#'
    },
    { 
      id: 6, 
      src: project6, 
          },
    { 
      id: 7, 
      src: project7, 
      
    },
    { 
      id: 8, 
      src: project8, 
      
    },
    { 
      id: 9, 
      src: project9, 
      
    },
    { 
      id: 10, 
      src: project10, 
      
    },
    { 
      id: 11, 
      src: project11, 
      title: 'cybersecurity platform with AI ', 
      description: 'Cyber sec platform with 4 tools and 4 models ',
      link: '#'
    },
    { 
      id: 12, 
      src: project12, 
      title: 'phishing detection website', 
      description: 'Phishing detection website with AI models ',
      link: '#'
    },
    { 
      id: 13, 
      src: project13, 
      title: 'Log analyzer website', 
      description: 'LOG ANSLYZER to  make easy read for logs of the Network',
      link: '#'
    },
    { 
      id: 14, 
      src: project14, 
      title: 'Email spam detection website', 
      description: 'Detecting fake email addresses with AI models',
      link: '#'
    },
  ];
  
  return (
    <section id="projects" className="section-padding bg-dark-light">
      <div className="container-custom">
        <SectionTitle 
          title="Projects" 
          subtitle="Secure solutions and innovative applications"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-dark-lighter rounded-lg overflow-hidden group cursor-pointer border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => handleImageClick(project)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={project.src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link}>
                 
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage.src}
            title={selectedImage.title}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;


