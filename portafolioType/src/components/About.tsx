import '../css/About.css'; // Asegúrate de importar el archivo CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <p>I am a Systems Engineering student, currently in my sixth semester, with a solid foundation in various key areas of the technological field. Throughout my education, I have acquired knowledge and skills in databases, software development, hardware architecture, data structures, requirements management, and modeling. I am passionate about technology and always seeking new opportunities to apply and expand my knowledge.</p>
      </div>
      <div className="about-details">
        <h2>Systems Engineering </h2>
        <div className="detail">
          <p>Birthday: 30 September 2003</p>
          <p>Age: 20</p>
        </div>
        <div className="detail">
          <p>Website: www.example.com</p>
          <p>Email: Santiagosierra003@gmail.com</p>
        </div>
        <div className="detail">
          <p>Phone: +57 304 65 72330</p>
          <p>City: Envigado, Colombia</p>
        </div>
        <h2>Skills</h2>
        <div className="detail">
          <ul className='tools'>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
          <ul className='tools'>
            <li>Jira</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul className='tools'>
            <li>JavaScript</li>
            <li>AWS</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
