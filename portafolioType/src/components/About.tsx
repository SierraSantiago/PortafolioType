import React from 'react';
import profile from '../assets/images/profile.jpg';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container text-center py-5">
        <img src={profile} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px' }} />
        <h2>About Me</h2>
        <p>Hello! I'm [Your Name], a systems engineering student with a passion for developing innovative solutions...</p>
        <p>Educational Background: [Your education details]</p>
        <p>Skills: [List of skills]</p>
      </div>
    </section>
  );
}

export default About;
