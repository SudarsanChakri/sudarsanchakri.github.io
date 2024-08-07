import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './SideBarStyles.css';

const SideBar = () => (
  <div id='SideBar'>
    <nav>
      <Link to="/" data-text="HOME">
        <FaHome title="Home" />
      </Link>
      <Link to="/about" data-text="ABOUT">
        <FaInfo title="About" />
      </Link>    
      <Link to="/mywork" data-text="MY WORK">
        <FaBriefcase title="My Work" />
      </Link>
      <Link to="/contact" data-text="CONTACT">
        <FaEnvelope title="Contact" />
      </Link>
      
      <a href="https://www.linkedin.com/in/sudarsanchakrip/" target="_blank" rel="noopener noreferrer" data-text="LINKEDIN">
        <FaLinkedin title="LinkedIn" />
      </a>
      <a href="https://github.com/SudarsanChakri/x" target="_blank" rel="noopener noreferrer" data-text="GITHUB">
        <FaGithub title="GitHub" />
      </a>
    
    </nav>
  </div>
);

export default SideBar;
