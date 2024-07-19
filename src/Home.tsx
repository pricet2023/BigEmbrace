
import React from 'react';
import './Home.css'
import Banner from './Banner.tsx';

const Home = () => (
  <div>
    <Banner/>
    <div className='Home'>
      <h1>Welcome to The Big Embrace</h1>
      <p>This is the home page.</p>
    </div>
  </div>
);

export default Home;