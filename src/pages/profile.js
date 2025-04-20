import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/theme";
import DarkModeToggle from "../components/toggle";
import ProfilePopup from "../components/popup"; 

import prof from "../assets/prof.png"; 
import profLight from "../assets/prof2.png";
import profDark from "../assets/prof3.jfif";
import logoutLight from "../assets/lout.png";
import logoutDark from "../assets/loutd.png";
import settingsLight from "../assets/sett.png";
import settingsDark from "../assets/sett2.png";

const ProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { theme } = useTheme();

  
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : { name: "Sam", email: "sam@example.com", phone: "1234567890" };
  });

  const updateUserData = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData)); 
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  
  const openProfilePopup = () => {
    setDropdownOpen(false);
    setProfilePopupOpen(true);
  };

  
  const closeProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
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
        <span className="username">{userData.name}</span> 
      </button>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isDropdownOpen ? "show-dropdown" : ""}`}>
        <ul className="dropdown-list">
          <li className="dropdown-item" onClick={openProfilePopup}>
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

      
      {isProfilePopupOpen && <ProfilePopup userData={userData} onUpdate={updateUserData} onClose={closeProfilePopup} />}
    </div>
  );
};

export default ProfileDropdown;
