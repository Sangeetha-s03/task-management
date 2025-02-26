import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/theme"; // Import Theme Context Hook
import DarkModeToggle from "../components/toggle";
import prof from "../assets/prof.png";

import ProfilePopup from "../components/popup"; // Import the new popup component

// Import Light & Dark Mode Images
import profLight from "../assets/prof2.png";
import profDark from "../assets/prof3.jfif";
import logoutLight from "../assets/lout.png";
import logoutDark from "../assets/loutd.png";
import settingsLight from "../assets/sett.png";
import settingsDark from "../assets/sett2.png";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false); 
  const dropdownRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };


  const toggleProfilePopup = () => {
    setProfilePopupOpen((prev) => !prev);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-container" ref={dropdownRef}>
      {/* Profile Button */}
      <button onClick={toggleDropdown} className="prof">
        <img src={prof} alt="Profile Avatar" className="avatar-img" />
        <span className="username">Username</span>

      </button>

      {/* Dropdown Popup */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item" onClick={toggleProfilePopup}>
              <img src={theme === "dark" ? profDark : profLight} alt="Profile Icon" className="dropdown-icon" />
              Profile
            </li>
            <li className="dropdown-item">
              <img src={theme === "dark" ? settingsDark : settingsLight} alt="Settings Icon" className="dropdown-icon" />
              Settings
            </li>
            <li className="dropdown-item">
              <img src={theme === "dark" ? logoutDark : logoutLight} alt="Logout Icon" className="dropdown-icon" />
              Logout
            </li>
            <hr className="dropdown-divider" />
            {/* Dark Mode Toggle */}
            <li className="dropdown-item toggle-container">
              <span>Dark Mode</span>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      )}

      {/* Profile Popup Component */}
      {isProfilePopupOpen && <ProfilePopup onClose={toggleProfilePopup} />}
    </div>
  );
};

export default ProfileDropdown;
