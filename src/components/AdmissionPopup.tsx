import React, { useState, useEffect } from 'react';
import './AdmissionPopup.css';

const AdmissionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContact = () => {
    // Replace with actual contact page URL
    window.location.href = '/contact';
  };

  const handleAdmission = () => {
    // Replace with actual admission page URL
    window.location.href = '/admission';
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <div className="popup-content">
          <img 
            src="/AdmissionImage.png" 
            alt="Admission Information" 
            className="admission-image"
          />
          <div className="popup-buttons">
            <button className="contact-btn" onClick={handleContact}>
              Contact Us
            </button>
            <button className="admission-btn" onClick={handleAdmission}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
