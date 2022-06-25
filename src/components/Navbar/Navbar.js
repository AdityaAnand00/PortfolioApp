import React from "react"
import './Navbar.css' ; 

// creating a function component . 
function Navbar(){

var name = "<AA />" ; 

    return (
        <div className="navbar_container">
            <div className="navbar_left">
              {name}
            </div>
            <div className="navbar_right">
                <p>About</p>
                <p>Tools</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Resume</p>
            </div>
        </div>
    )
}
// this function needs to be used in node file  and since we are exporting it to use it at different file location so  at that file location we need to import it as well. .
export default Navbar ;

//  in Navbar  function we return here 'jsx' -> which means html written inside js . 