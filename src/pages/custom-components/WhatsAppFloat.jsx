import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const phoneNumber = '919119897770'; 
  const message = 'Hi OWNiFiE Team, I’d like to explore investment opportunities in your projects. Please share current options and details.'; 

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;