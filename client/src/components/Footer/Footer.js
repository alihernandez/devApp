import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import gitIcon from '../../images/github.png';
import linkIcon from '../../images/linkedin.png';
import { scroller } from "react-scroll";
import './Footer.css';



const Footer = () => {

  const scrollToSection = () => {
    scroller.scrollTo("aboutMe", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

    return(
        <div className="footer">
        <div className="fContent">
        
          <p style={{textAlign:"center"}}>Please
          submit a completed <a href="/contact">Contact Form</a> and I will reach out to you shortly to
          discuss rates and details. </p>
        </div>
  
          <div className="socialLinks col">
  
          <Link to={'/'}>
          <Button onClick={scrollToSection}>Home</Button> 
          </Link>
  
         
  
          <Link to={'/'}>
          <Button>Contact</Button> 
          </Link>
          
          <br />

          <a href="https://github.com/alihernandez">
        <img src={gitIcon} id="gitHubFoo" alt="githubIcon"/>
        </a>

        <a href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">
        <img src ={linkIcon} id="linkedIn" alt="linkedinIcon"/>
        </a>
  
          
  
          </div>
  
          <p style={{textAlign:"center"}}>&copy; webDev 2021</p>
          <a href="/Terms"><p style={{textAlign:"center"}}>Terms & Services</p></a>
          
      </div>

    );
}

export default Footer;