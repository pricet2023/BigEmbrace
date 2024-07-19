import React from 'react';
import './About.css'
import Banner from './Banner.tsx';

const About = () => (
  <div>
    <Banner />
    <div className='About'>
      <h1>About Page</h1>
      <p>Learn more about us.</p>
    </div>
  </div>
);

export default About;