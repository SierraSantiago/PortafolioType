import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="container py-5">
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center">You can reach me via email at [your-email@example.com]</p>
        <p className="text-center">Connect with me on <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={3} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
