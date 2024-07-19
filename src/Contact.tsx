// src/Contact.js

import React from 'react';
import Banner from './Banner.tsx';
import './Contact.css'

const Contact = () => (
  <div>
    <Banner />
    <div className='Contact'>
      <h1>Contact us</h1>
      <div className='SquareContainer'>
        <div className='ContactSquare'>
          <h3 className="square-title">Contact Hours</h3>
          <p className="square-text">Monday to Friday 8:00am to 22:00pm Saturday and Sunday 9:00am to 17:00am</p>
        </div>
        <div className='ContactSquare'>
          <h3 className="square-title">Get Social</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;