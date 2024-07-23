import React from 'react';
import Banner from './Banner.tsx';
import './Resources.css'

const Resources = () => (
  <div>
    <Banner />
    <div className='Resources'>
      <h1 className='title'>Resources</h1>
      <div className='ButtonContainer'>
        <button className='ResourceButton'>Chat Room</button>
        <button className='ResourceButton'>Resources and Support</button>
        <button className='ResourceButton'>Book a talk</button>
      </div>
    </div>
  </div>
);

export default Resources;