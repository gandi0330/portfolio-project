import React from "react"
import Navbar from "./Navbar"


const Layout = ({children}) =>{
    return(
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    )
}

export default Layout