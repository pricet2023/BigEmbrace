import React from 'react';
import './About.css'
import Banner from '../Banner/Banner.tsx';

const About = () => (
  <div>
    <Banner />
    <div className='About'>
      <div className='WhyStartedContainer'>
        <div className='WhyStartedLeft'>
          <h1>Why we started this</h1>
        </div>
        <div className='WhyStartedRight'>
          <p>Our sister was diagnosed with Anorexia Nervosa in October 2021. It completely stopped our world as we knew it.
            When searching online, we found there was no support for siblings and we knew this had to change. The resources
            online didn't feel personal and we felt that because we weren't the parent or the person going through it, that
            our emotions weren't valid. This obviously isn't true. We want to help other people who have a loved one going
            through an eating disorder to not feel alone and be a listening ear, as well as offer support and educational
            resources to help understand it better.</p>
        </div>
      </div>
    </div>
    <div className='WhatWeDoContainer'>
      <div className='WhatWeDoLeft'>
        <p>The Big Embrace is a community space for people supporting a loved one with an eating disorder. We want to create
          a safe space for siblings, friends, extended family members, work colleagues to feel heard, as well as to learn. 
          
          We offer a listening ear, informal coffee mornings, informative resources, bookable educational talks for
          organisations and more.

          We are here for you when it feels like no one else is.

          We are not a medical service so if you are severly suffering or worried about someone else's saftey, please contact
          your GP or health advisor.
        </p>
      </div>
      <div className='WhatWeDoRight'>
        <h1>What we do</h1>
      </div>
    </div>
  </div>
);

export default About;