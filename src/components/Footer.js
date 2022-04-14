import React from "react"
import github from "../img/github.png"
import instagram from "../img/instagram.png"
import velog from "../img/velog.png"
import Fade from 'react-reveal/Fade';

const Footer = () =>{
    return (
        <div className="section" id="contact">
            <div className="container">
                <div className="footer-container">
                <Fade bottom cascade>
                    <div className="social-icons">
                        <a href="https://github.com/gandi0330" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="icons"></img>
                        </a>
                        <a href="https://velog.io/@gandi0330" target="_blank" rel="noopener noreferrer">
                            <img src={velog} alt="icons"></img>
                        </a>
                        <a href="https://www.instagram.com/hunmong2/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="icons"></img>
                        </a>
                    </div>
                </Fade>
                    <div className="contact-infos">
                        <div>
                            <span className="info-title">Name</span> 
                            <span> 정현명 (Hyeonmyeong Jung)</span>
                        </div>
                        <div>
                            <span className="info-title">Age</span> 
                            <span> 25 </span>
                        </div>
                        <div>
                            <span className="info-title">Address</span>
                            <span> GwangJu, Korea </span>
                        </div>
                        <div>
                            <span className="info-title">Phone</span>
                            <span> +82 10-6342-5756 </span>
                        </div>
                        <div>
                            <span className="info-title">E-mail</span>
                            <span> gandi0330@naver.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer