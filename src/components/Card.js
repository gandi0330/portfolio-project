import React from "react"

const Card = ({ heading, paragraph, projectLink }) => {
    return (
    <div
        className="card"
        style={
            {
                backgroundColor:"darkcyan"
        }
    }
    >
        <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
        >
            Explore
        </a>
        </div>
    </div>
    )
}

export default Card