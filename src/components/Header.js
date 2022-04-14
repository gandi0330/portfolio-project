import React, { useEffect, useState } from "react"
import Flip from 'react-reveal/Flip';
const Header = () =>{

    const [count,setCount] = useState(0);
    const arr =["쉽게 몰입하는","꾸준히 공부하는","책임있게 행동하는"];

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
                    <Flip cascade top>
                        <h3>안녕하세요</h3>
                        <h3><span className={parseInt(count%4)>=3 ? "header-changebar-end": "header-changebar-start"}> {arr[parseInt(count/4)]}</span></h3>
                        <h3>개발자 정현명 입니다</h3>
                    </Flip>
                    </div>
                
            </div>
        </div>

    )
}

export default Header;