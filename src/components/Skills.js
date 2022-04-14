import React from "react"
import { Flip } from "react-reveal";
import data from "./myData";

const Skills = () =>{
    return (
        <div className="section" id="skills">
            <div className="container">
                <div className="skills-container">
                    <Flip cascade top>
                        <h1>Skills</h1>
                        
                        <h3>Major</h3>
                        <div className="skills-grid-major">
                            {data.major.map((skill,index)=>(
                                <div className="skill" key={index}>
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>
                    

                        <h3>Knowledges</h3>
                        <div className="skills-grid-knowledges">
                            {data.knowledges.map((skill,index)=>(
                                <div className="skill" key={index}>
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>


                    
                    </Flip>
                </div>
            </div>
        </div>
    )
}

export default Skills