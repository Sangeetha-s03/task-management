// src/pages/Header.jsx
import React from 'react';
import { useTable } from 'react-table'; // Correct import for react-table
import { saveAs } from 'file-saver';   // Correct import for file-saver
import './index.css';                 // Correct import for styles.css

const Header = () => {
  return (
    <header>
      <h1>Task Management System</h1>
    </header>
  );
};

export default Header;