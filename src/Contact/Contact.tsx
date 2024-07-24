// src/Contact.js

import React from 'react';
import Banner from '../Banner/Banner.tsx';
import './Contact.css'
import { SocialIcon } from 'react-social-icons';

const Contact = () => (
  <div>
    <Banner />
    <div className='Contact'>
      <h1 className='title'>Contact us</h1>
      <div className='SquareContainer'>
        <div className='ContactSquare'>
          <h3 className="square-title">Contact Hours</h3>
          <p className="square-text">Monday to Friday</p>
          <p className="square-text">8:00am to 22:00pm</p>
          <p className="square-text">Saturday and Sunday</p>
          <p className="square-text">9:00am to 17:00am</p>
        </div>
        <div className='ContactSquare'>
          <h3 className="square-title">Get Social</h3>
          <div className='SocialButtons'>
            {/* <button className='SocialButton'>facebook</button>
            <button className='SocialButton'>twitter</button>
            <button className='SocialButton'>instagram</button> */}
            <SocialIcon url='x.com'/>
            <SocialIcon network='facebook'/>
            <SocialIcon network='instagram'/>
          </div>
          <button className='SocialButton'>email us</button>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;