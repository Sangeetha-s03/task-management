import React from "react";
import { useTheme } from "../context/theme"; 
import CloseButton from 'react-bootstrap/CloseButton';


const ProfilePopup = ({ onClose }) => {
  const { theme } = useTheme(); 

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${theme}`}>
        <h2>Your Profile</h2>
        <p className="name">Name: sam</p>
        <p className="mail">Email: sam@example.com</p>
        <p className="phn">Phone: 123457890</p>
        <button onClick={onClose} className="popup-close">Close</button>        
      </div>
    </div>
  );
};

export default ProfilePopup;
