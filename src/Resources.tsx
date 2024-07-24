import React from 'react';
import Banner from './Banner.tsx';
import './Resources.css'
import phone from './images/phone.PNG';
import resources from './images/resources.PNG';
import speak from './images/speak.PNG';

const Resources = () => (
  <div>
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