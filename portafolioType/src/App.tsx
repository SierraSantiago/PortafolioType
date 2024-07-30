import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <About />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
