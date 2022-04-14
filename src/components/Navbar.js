import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Fade from 'react-reveal/Fade';

const Navbar = () =>{
    return (
        <div className="section">
            <div className="container">
                <div className="nav-wrapper" >
                    <Fade>
                        <div className="nav-title">
                            <span className="nav-title-char">W</span>
                            <span className="nav-title-char">i</span>
                            <span className="nav-title-char">s</span>
                            <span className="nav-title-char">e</span> 
                            <span className="nav-title-char">P</span>
                            <span className="nav-title-char">r</span>
                            <span className="nav-title-char">o</span>
                            <span className="nav-title-char">g</span>
                            <span className="nav-title-char">r</span>
                            <span className="nav-title-char">a</span>
                            <span className="nav-title-char">m</span>
                            <span className="nav-title-char">m</span>
                            <span className="nav-title-char">e</span>
                            <span className="nav-title-char">r</span>

                        </div>
                        <div className="nav-links">
                            <button onClick={()=>scrollTo("#projects")}>Projects</button>
                            <button onClick={()=>scrollTo("#skills")}>Skills</button>
                            <button onClick={()=>scrollTo("#contact")}>Contact</button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Navbar