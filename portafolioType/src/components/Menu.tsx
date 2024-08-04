import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMusic, faBriefcase, faEnvelope, faBars, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import image from '../assets/images/profile.jpg';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial state based on the window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <button className="menu-close" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <div className="profile">
          <img src={image} alt="Profile" className="profile-img" />
          <h2>Santiago Sierra</h2>
        </div>
        <ul className="menu-list">
          <li><Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/about'><FontAwesomeIcon icon={faUser} /> About</Link></li>
          <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /> Projects</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faMusic} /> Hobbies</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faSkype} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
