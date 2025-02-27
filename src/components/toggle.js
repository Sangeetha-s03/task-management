import React from "react";
import { useTheme } from "../context/theme"; 

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <button className={`toggle-button ${theme}`} onClick={toggleTheme}>
      <div className={`toggle-circle ${theme}`}></div>
    </button>
  );
};

export default DarkModeToggle;
