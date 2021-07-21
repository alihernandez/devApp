import React, { Component } from 'react';
import './Header.css';
import gitIcon from '../../images/github48.png';
import linkIcon from '../../images/linkedin.gif';
// import HeaderImg from '../../images/header-background.png';



export default class header extends Component {
  
    render() {
    
      return (

      <div className="aboutMe" id="head">
      <span>Hello</span>
      <span>I am Ali Hernandez</span>
      <span>A creative fullstack developer located in the Rocky Mountains of Colorado. Working primarily with MERN stack technologies.</span>
      
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
      }
};
