import React from "react";
import './Education.css';
import '../styles.css';
import '../../App.css';

const Education = () => {

    return(
        <div className="mainContainer">
        <div className="subContainer">
            <table className="educationData">
                <span>Education: </span>
                <ul>
                    <p>University of Denver Full Stack Coding Bootcamp</p>
                    <p>December '20</p>
                </ul>
            </table>
            <table className="educationData">
                <span>Contact: </span>
                <ul>
                    <p id="emailAdd">ali.hernandez9two@gmail.com</p>
                </ul>
            </table>
            
        </div>
        </div>
        
    )
}

export default Education;

//a href="https://docs.google.com/document/d/1HfO7EoBMV-xKG8VwBZy7KIfKpd2i5ta-Kq9GEGOsHKE/edit?usp=sharing">Resume</a>