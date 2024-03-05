import React from "react";
import {Link} from 'react-router-dom';
import Home from "./Home";
import photo1 from './photo1.jpeg';
import photo2 from './photo2.jpeg';
import photo3 from './photo3.jpg';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import './index2.css';

function About(){
return(
    <div className="screenb">
        <fieldset className="headerb">
            <h1>Ronn Software Solutions</h1>
            <navigation className="navb">
                <Link to="/">Home</Link>
                <a href="#">About</a>
            </navigation>
        </fieldset>
        <fieldset className="body-two">
            <div className="row">
                <div className="col-1">
                    <h2>UI/UX Designs</h2>
                    <h4>Elevate Your Online Presence <br></br>
                        with Seamless UI/UX Design Services<br></br> 
                        Are you looking to captivate your<br></br> 
                        unique audience, boost engagement<br></br>
                        Our expert UI/UX design team is here to<br></br>
                        transform your digital experience into <br></br> 
                        something extraordinary.</h4> 
                    <img src={photo3}></img>         
                </div>
                <div className="col-1">
                    <h2>Web Development</h2>
                    <h4>Unlock Your Online Potential with <br></br>
                    Expert Web Development Services<br></br>
                    ready to stand out in the digital landscape<br></br> 
                    and drive  results for your business?<br></br>
                    Our skilled developers specialize in crafting <br></br>
                    bespoke web solutions tailored to your <br></br> 
                    goals, audience, and industry requirements.</h4>
                    <img src={photo2}></img>
                </div>
                <div className="col-1">
                    <h2>Web Hosting</h2>
                    <h4>Power Your Online Presence with Reliable<br></br>
                     Web Hosting Solutions<br></br>
                        Looking for a hosting provider you can <br></br>
                        trust to keep your website running smoothly?<br></br> 
                        Our top-tier web hosting services are designed<br></br> 
                        to meet the needs of businesses of all sizes,<br></br>
                        offering unmatched reliability, security, and performance.</h4>
                    <img src={photo1}></img>    
                </div>
            </div>
        </fieldset>
        <fieldset className="footerb">
            <h1>Find Us On</h1>
           <div>
                <h3><FaInstagram></FaInstagram>  <a href="https://www.instagram.com/ronn_chica"target="_blank"rel="noopener noreferrer">Instagram</a><br></br></h3>
                <h3><FaEnvelope></FaEnvelope>   <a href="mailto:hellennaomi001@gmail.com">Email</a></h3>
                <h3><FaPhone></FaPhone>   Whatsapp: +254 768398609</h3>
            </div>    
        </fieldset>
    </div>
);
}
export default About