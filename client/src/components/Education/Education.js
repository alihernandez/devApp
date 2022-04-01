import React from "react";
import './Education.css';


const Education = () => {

    return(
        <div className="mainContainer" >
        <div className="subContainer" id="educationCont">
            <table className="educationData">
                <h2>Education: </h2>
                <ul>
                    <p>University of Denver Full Stack Coding Bootcamp</p>
                    <p>December '20</p>
                </ul>
            </table>
            <table className="educationData">
                <h2>Contact: </h2>
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