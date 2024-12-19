import React from 'react';
import logo from "../images/logo.png";
import { FiDownload } from "react-icons/fi";
import './editornavbar.css'; // Import the CSS file

const NavBarEditor = () => {
  return (
    <div className="editor-navbar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Logo" />
      </div>
      <p>
        File / <span className="project-name">My first project</span>
      </p>
      <i className="download-btn">
        <FiDownload />
      </i>
    </div>
  );
};

export default NavBarEditor;
