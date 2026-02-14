import React, { useEffect } from 'react';

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 right-0 h-full w-64 bg-dark-lighter border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-primary hover:bg-dark rounded-lg transition-all duration-200 flex items-center"
                >
                  <span className="text-lg font-medium">About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-primary hover:bg-dark rounded-lg transition-all duration-200 flex items-center"
                >
                  <span className="text-lg font-medium">Projects</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-primary hover:bg-dark rounded-lg transition-all duration-200 flex items-center"
                >
                  <span className="text-lg font-medium">Contact</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

