import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="container py-5">
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center">You can reach me via email at [your-email@example.com]</p>
        <p className="text-center">Connect with me on <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        
      </div>
    </section>
  );
}

export default Contact;
