import React from 'react';
import profileImage from '../../assets/images/profile.png';

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={profileImage} className="my-2" style={{ width: "10%" }} alt="profile photo" />
      <p>I am an aspiring full stack developer and hobbyist.</p>
    </section>
  );
}

export default About;