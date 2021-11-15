import React from 'react';
import profileImage from '../../assets/images/profile.png';

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={profileImage} className="my-2" style={{ width: "10%" }} alt="profile photo" />
      <p>Full Stack Web Developer with a strong professional background, highly skilled in APIs, MySQL, React, and responsive design.</p>
    </section>
  );
}

export default About;