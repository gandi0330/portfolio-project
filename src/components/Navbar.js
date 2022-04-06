import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"


const Navbar = () =>{
    return (
        <div className="section">
            <div className="container">
                <div className="nav-wrapper" >
                    <div className="nav-title">
                        Wise Programmer
                    </div>
                    <div className="nav-links">
                        <button onClick={()=>scrollTo("#projects")}>projects</button>
                        <button onClick={()=>scrollTo("#skills")}>skills</button>
                        <button onClick={()=>scrollTo("#contact")}>contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar