import React from "react";
import './Homepage.css' ;
 import githubicon from "../../images/githubicon.png";
 import linkedinicon from "../../images/linkedinicon.png";


function HomePage(){

    return(
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span>my name is</p>
                <p className="homepage_left_h2">Aditya Anand</p>
                <p className="homepage_left_h3">Developer at <span className="red_color">Somewhere</span></p>
                <p className="homepage_left_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. {" "}
                </p>
                <div>
                    <a href="https://github.com/AdityaAnand00" target="_blank">
                    <img src={githubicon} alt="githubimage"    className="homepage_logo"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-anand-441b51201/" target="_blank">
                    <img src={linkedinicon} alt="linkedinimage"   className="homepage_logo"></img>
                    </a>
                   
                </div>
                <a href="mailto:adityaanandvv98@gmail.com">
                    <button className="homepage_left_button">get in Touch</button>

                </a>
            </div>
            <div className="homepage_right">
                <img
              
                 src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF"></img>
                
            </div>
        </div>
    )
}

export default HomePage ; 