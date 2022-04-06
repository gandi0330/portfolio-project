import React from "react"
import github from "../img/github.png"
import instagram from "../img/instagram.png"
import velog from "../img/velog.png"

const Footer = () =>{
    return (
        <div className="section">
            <div className="container">
                <div className="footer-container">
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
                    <div>
                        Made by 현명🎈
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer