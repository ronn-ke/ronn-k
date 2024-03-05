import React from "react";
import {Link} from 'react-router-dom';
import About from "./About";
import pict from './pict.jpeg';
import pictu from './pictu.jpg';
function Home(){
    const handleClick = () => console.log("about")
    return(

      <div className="fullscreen">
        <fieldset className="header">
            <h1>Ronn Software Solutions</h1>
            <navigation className="nav">
               <a href="#">Home</a>
               <Link to="/About">About</Link>
            </navigation>
        </fieldset>
        <fieldset className="body-one">
            <p>
                We are among the Best Software Companies  within<br></br>
                the country Dedicated in giving Our customers<br></br>
                with best quality assured services.<br></br><br></br>
                Our services are available 24/7 country-wide and 
                internationally<br></br>
                Reach us at anytime,anywhere for anything technologically wise<br></br>
                Believing in that Tech to put a smile on our customers.<br></br>
                  
            </p>
            <Link to="/About">
            <button>Find More</button>
            </Link>
            <div className="row">
                <div className="column">
                    <img src={pict}></img>
                </div>
                <div className="column">
                   <img src={pictu}></img>
                </div>
            </div>
          
        </fieldset>
        <fieldset className="footer">
           <h2>RONN SOFTWARE SOLUTION</h2>
           <p>&copy; {new Date().getFullYear()} Ronnsoftwares.com</p>

        </fieldset>
    </div>    

    );

}
export default Home