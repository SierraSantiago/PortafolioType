import React from 'react';
import '../css/Hobbies.css';

interface Hobby {
  title: string;
  description: string;
  image: string;
};

const hobbies: Hobby[] = [
  {
    title: 'Video Games',
    description: 'I like to play good campaigns and difficult games. They help me develop persistence and not give up.',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg'
  },
  {
    title: 'Piano',
    description: 'I am learning how to play the piano. It helps me develop motor skills and patience. I also like how it sounds.',
    image: 'https://img.freepik.com/vector-premium/ilustracion-vectorial-piano-cola-estilo-dibujos-animados_939711-4854.jpg?w=360'
  },
  {
    title: 'Watch series',
    description: 'I like to watch series in my free time. They help me relax and disconnect from my daily routine.',
    image: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
  },
];

const Hobbies: React.FC = () => {
  return (
    <section className="hobbies">
      <div className="container py-5">
        <h2 className="text-center">Hobbies</h2>
        <div className="row">
          {hobbies.map((hobby, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4">
                <img src={hobby.image} className="card-img-top" alt={hobby.title} />
                <div className="card-body">
                  <h5 className="card-title">{hobby.title}</h5>
                  <p className="card-text">{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Hobbies;
