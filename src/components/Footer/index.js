import React from 'react';
import { RiGithubLine, RiLinkedinBoxLine, RiStackOverflowLine } from 'react-icons/ri';

function Footer() {

  return(
    <footer>
      <a href="https://github.com/hellokedakai" target="_blank" rel="noreferrer">
        <RiGithubLine />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <RiLinkedinBoxLine />
      </a>
      <a href="https://stackoverflow.com/users/14993732/hellokedakai?tab=profile" target="_blank" rel="noreferrer">
        <RiStackOverflowLine />
      </a>
    </footer>
  )
};

export default Footer;