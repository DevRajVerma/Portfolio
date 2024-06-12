// src/components/CaseStudies.js
import React from 'react';
import './CaseStudies.css';

const caseStudies = [
  {
    category: 'E-commerce',
    title: 'Gift Wala',
    description: 'It is an ecommerce platform especially designed for gifts, where a seller can lists his products and a buyer can easily purchase whatever he/she likes',
    buttonLabel: 'View case study',
    imageUrl: 'CaseStudies/Gift-wala.png',
  },
  {
    category: 'Shop Management',
    title: 'Muskan Trading Company',
    description: 'It is a shop management system where all the purchase entries get registered, like buying items from which mills, sellings to which wholesaler, what the item is, price and quantity of items, data and time of purchase etc.',
    buttonLabel: 'View case study',
    imageUrl: 'CaseStudies/Muskan-trading-company.png',
  },
  {
    category: 'Frontend Development',
    title: 'Rapture Technologies',
    description: 'It is an online learning platform, a south-east-India based Startup. I did a one month intership remotely making webpages for the company and learning a lot of things.',
    buttonLabel: 'View case study',
    imageUrl: 'CaseStudies/Rapture.png',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Solving user & business problems since last 1.5+ years.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="case-studies">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study">
              <div className="case-study-image">
                <img src={study.imageUrl} alt={study.title} />
              </div>
              <div className="case-study-content">
                <span className="category">{study.category}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <a href="https://www.google.com/" className="cta-button">{study.buttonLabel}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;