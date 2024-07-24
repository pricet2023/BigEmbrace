import React from 'react';
import Banner from '../Banner/Banner.tsx';
import './Resources.css'
import phone from '../images/phone.jpg';
import resources from '../images/resources.jpg';
import speak from '../images/speak.jpg';

const Resources = () => (
  <div className='ResourcesPage'>
    <Banner />
    <div className='Resources'>
      <h1 className='title'>Resources</h1>
      <div className='ActionsContainer'>
        <div className='Action'>
          <img src={phone} alt='phone'/>
          <button className='ResourceButton'>Chat Room</button>
        </div>
        <div className='Action'>
          <img src={resources} alt='resources'/>
          <button className='ResourceButton'>Resources and Support</button>
        </div>
        <div className='Action'>
          <img src={speak} alt='speak'/>
          <button className='ResourceButton'>Book a talk</button>
        </div>
      </div>
    </div>
  </div>
);

export default Resources;