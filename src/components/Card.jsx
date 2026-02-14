import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-dark-light rounded-xl p-6 border border-gray-800 transition-all duration-300 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;


