import React, { useEffect, useState } from "react"
import Flip from 'react-reveal/Flip';
const Header = () =>{

    const [count,setCount] = useState(0);
    const arr =["쉽게 몰입해요","꾸준히 공부해요","책임있게 행동해요"];

    useEffect(()=>{
        const timers = setInterval(()=>{
            setCount(count => (count+1) % 12);
        }, 1000);

        return() =>clearInterval(timers);
    },[]);

    return(
        
        <div className="section">
            <div className="container">
                
                    <div className="header-wrapper">
                    
                        <h3>
                            <Flip cascade top>
                                안녕하세요 <br/>개발자 정현명 입니다
                            </Flip>
                        </h3>
                        <h3>저는 <span className={parseInt(count%4)>=3 ? "header-changebar-end": "header-changebar-start"}>{arr[parseInt(count/4)]}</span> </h3>

                    </div>
                
            </div>
        </div>

    )
}

export default Header;