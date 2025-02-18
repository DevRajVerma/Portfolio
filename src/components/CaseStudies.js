// src/components/CaseStudies.js
import React from 'react';
import './CaseStudies.css';
import ResponsiveButton from './ResponsiveButton';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const caseStudies = [
  
  {
    category: 'Shop Management',
    title: 'Software App',
    description: 'It is an online platform offering exclusive discounts on premium business tools. It provides access to essential software at significantly reduced prices, helping businesses save over $1,500 on tools that drive growth.',
    buttonLabel: 'View Project',
    imageUrl: 'CaseStudies/Softwareapp.png',
    sitelink: 'https://software-store-main.vercel.app/'
  },
  {
    category: 'E-commerce',
    title: 'Gift Wala',
    description: 'It is an ecommerce platform, where a seller can lists his products and a buyer can easily purchase whatever he/she likes',
    buttonLabel: 'View Project',
    imageUrl: 'CaseStudies/Gift-wala.png',
    sitelink: 'https://giftwala.vercel.app/'
  },
  {
    category: 'Web Development Intern',
    title: 'GAOTek Inc.',
    description: 'GAOTek is a leading supplier of test and measurement equipment for fiber optics, telecommunications. I did a three month intership remotely making webpages for the company and learning a lot of things.',
    buttonLabel: 'View Certificate',
    imageUrl: 'CaseStudies/GaoTek.png',
    sitelink: 'https://drive.google.com/file/d/12kwuJnr4MxtuPzhz6s2yrDymQ4mkOx7i/view?usp=sharing'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
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
                <a target='_blank' rel='noopener noreferrer' href={study.sitelink} >
                <ResponsiveButton text= {study.buttonLabel}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
