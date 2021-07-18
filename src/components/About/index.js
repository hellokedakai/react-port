import React from 'react';
import profileImage from '../../assets/images/profile.png';

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src ={profileImage}></img>
      <p>I am a person</p>
    </section>
  );
}

export default About;