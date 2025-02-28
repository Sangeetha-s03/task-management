import React, { useState } from "react";
import { useTheme } from "../context/theme";
import CloseButton from "react-bootstrap/CloseButton";

const ProfilePopup = ({ userData, onUpdate, onClose }) => {
  const { theme } = useTheme();


  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);


  const handleSave = () => {
    const updatedData = { name, email, phone };
    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${theme}`}>
        <div className="popup-header">
          <h2>Edit Profile</h2>
          <CloseButton className="close-btn" onClick={onClose} />
        </div>
        <form>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Phone</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopup;
