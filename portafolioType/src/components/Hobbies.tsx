import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <section className="hobbies">
      <div className="container py-5">
        <h2 className="text-center">Hobbies</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Hobby One</h3>
            <p>Description of hobby one. Why it’s important and how it contributes to your growth.</p>
            <img src="https://via.placeholder.com/150" alt="Hobby One" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Hobby Two</h3>
            <p>Description of hobby two. Why it’s important and how it contributes to your growth.</p>
            <img src="https://via.placeholder.com/150" alt="Hobby Two" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
