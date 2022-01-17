import React, { Component } from 'react';
import './Header.css';
import './flicker.css';
import gitIcon from '../../images/github48.png';
import linkIcon from '../../images/linkedin.gif';
import self from '../../images/self.png';
// import { Link } from 'react-router-dom';
// import HeaderImg from '../../images/header-background.png';



export default class header extends Component {
  
    render() {
    
      return (

      <div className="aboutMe" >
      <span id="A">Hello</span>
      <span id="A">I am Ali Hernandez</span>
      <br />
      
      <img className="selfPic" src={self} alt="devPic" />
      <br />
      <span>A creative fullstack developer located in the Rocky Mountains of Colorado. Working primarily with MERN stack technologies.</span>
      
      <div className="socialIcons">
        <span>Github:</span>
        <a id="L" href="https://github.com/alihernandez">
        <img src={gitIcon} id="gitHub" alt="githubIcon"/>
        </a>
        <span>LinkedIn:</span>
        <a id="I" href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">
        <img src ={linkIcon} id="linkedIn" alt="linkedinIcon"/>
        </a>


      </div>

      </div>
      
    
  );
      }
};
