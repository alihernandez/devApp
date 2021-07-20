import React from 'react';
import './Header.css';
import gitIcon from '../../images/github48.png';
import linkIcon from '../../images/linkedin.gif';
// import HeaderImg from '../../images/header-background.png';




const Header = (props) => {
  return (
    
      
      <div className="aboutMe">
      <p>Hello</p>
      <p>I am Ali Hernandez</p>
      <p>A creative fullstack developer located in the Rocky Mountains of Colorado. Working primarily with MERN stack technologies.</p>
      <div className="socialIcons">

        <a href="https://github.com/alihernandez">
        <img src={gitIcon} id="gitHub" alt="githubIcon"/>
        </a>

        <a href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">
        <img src ={linkIcon} id="linkedIn" alt="linkedinIcon"/>
        </a>


      </div>

      </div>
      
   
  );
};

export default Header;