import React, { useState } from "react";
import { useTheme } from "../context/theme";
import CloseButton from "react-bootstrap/CloseButton";

const ProfilePopup = ({ onClose }) => {
  const { theme } = useTheme();
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  // State for user details
  const [userData, setUserData] = useState({
    name: "Sam",
    email: "sam@example.com",
    phone: "123457890",
  });

  // Function to toggle between View & Edit mode
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  // Function to save updated values
  const handleSave = () => {
    setIsEditing(false); // Switch back to profile view
  };

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${theme}`}>
        <CloseButton onClick={onClose} />
        <div className="popup-header">
          <h2>{isEditing ? "Edit Profile" : "Your Profile"}</h2>
          
        </div>

        {/* Profile View Mode */}
        {!isEditing ? (
          <div className="profile-view">
            <p className="name"><strong>Name:</strong> {userData.name}</p>
            <p className="mail"><strong>Email:</strong> {userData.email}</p>
            <p className="phn"><strong>Phone:</strong> {userData.phone}</p>
            <button onClick={toggleEditMode} className="edit-btn">Edit Profile</button>
          </div>
        ) : (
          /* Edit Profile Mode */
          <form>
            <label>Name:</label>
            <input type="text" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />

            <label>Email:</label>
            <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

            <label>Phone:</label>
            <input type="text" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />

            <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePopup;
