import React from "react"
import Flip from 'react-reveal/Flip';
import data from "./myData"
import Card from "./Card"

const Projects = () =>{
    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="work-wrapper">
                    <Flip cascade top>
                        <h1>Projects</h1>
                    </Flip>

                    <div className="grid">
                        <Flip cascade top>
                        {data.projects.map((project, index) => (
                            <Card
                            key={index}
                            heading={project.title}
                            paragraph={project.para}
                            imgUrl={project.imageSrc}
                            projectLink={project.url}
                            ></Card>
                        ))}
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects