import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Working with Dev Raj was a game-changer for our company. His expertise in the MERN stack and attention to detail helped us launch our project seamlessly. He’s not just a developer; he’s a problem solver who understands the bigger picture. Highly recommend!',
    name: 'Ankush Mehra',
    imgSrc: 'Testimonials/Ankush.jpeg',
    position: 'CEO at Company'
  },
  {
    text: 'Dev Raj exceeded our expectations during his internship. His ability to quickly grasp new concepts and deliver high-quality code was impressive. He played a crucial role in several projects, and his contributions were invaluable. A reliable and skilled developer!',
    name: 'Kuldeep Kumar',
    imgSrc: 'Testimonials/Kuldeep.jpeg',
    position: 'Manager at Business'
  },
  {
    text: "I was blown away by Dev Raj's full stack development skills. He brought our vision to life with a stunning and functional web application. His proficiency with the MERN stack and his dedication to the project were evident in the final product. A true professional" ,
    name: 'Keshav Goel',
    imgSrc: 'Testimonials/Keshav.jpeg',
    position: 'Director at Organization'
  },
  {
    text: 'Dev Raj is a top-tier developer with a strong grasp of both frontend and backend technologies. His work on our MERN stack project was exceptional, and his ability to solve complex problems efficiently made a huge difference. Trustworthy and highly skilled!',
    name: 'Ankit Kumar',
    imgSrc: 'Testimonials/BadaAnkit.png',
    position: 'Founder at Startup'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">Hear what my clients have to say about my work and services.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-content">
              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="testimonial-client">
                <img src={testimonial.imgSrc} alt={testimonial.name} className="client-image" />
                <div className='name-and-position'>
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
