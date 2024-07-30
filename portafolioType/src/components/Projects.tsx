import React from 'react';

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
    title: 'Project One',
    description: 'Brief description of project one.',
    technologies: 'React, CSS, HTML',
    role: 'Developer',
    link: 'https://example.com/project-one',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project Two',
    description: 'Brief description of project two.',
    technologies: 'Vue, JavaScript',
    role: 'Lead Developer',
    link: 'https://example.com/project-two',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project Three',
    description: 'Brief description of project three.',
    technologies: 'Angular, TypeScript',
    role: 'Full Stack Developer',
    link: 'https://example.com/project-three',
    image: 'https://via.placeholder.com/150'
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
