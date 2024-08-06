//Projects.tsx
import React from 'react';
import '../css/Projects.css';
import soActive from '../assets/images/soActive.png';

interface Project {
  title: string;
  description: string;
  technologies: string;
  role: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'CampusWallet',
    description: 'Movil application for the management of university expenses and payments',
    technologies: 'Flutter, CMake, Swift, HTML, Dart, C++, C',
    role: 'Developer',
    link: 'https://github.com/PedroJuanHenaoVelez/CampusWallet',
    image: 'https://cdn-icons-png.freepik.com/512/5735/5735153.png'
  },
  {
    title: 'So Active Page',
    description: 'Page about gym clothes and gym accessories',
    technologies: 'HTML, CSS, JavaScript, EJS',
    role: 'Lead Developer',
    link: 'https://github.com/SierraSantiago/Proyecto-PaginaWeb',
    image: soActive
  },
  {
    title: 'ShopSense',
    description: 'Recomendation system for online shopping',
    technologies: 'EJS, CSS, JavaScript, HTML, Jupiter Notebook',
    role: 'Developer',
    link: 'https://github.com/SierraSantiago/ShopSense',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIlCh-Z5pPGr2Gb-97Nf-gLGQh5oH1HwhvQ&s'
  },
  
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container py-5">
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                  <p><strong>Role:</strong> {project.role}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
