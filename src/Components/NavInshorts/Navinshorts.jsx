import React from 'react'
import "./Navinshorts.css"
import Sidebar from "./Sidebar"

const Navinshorts = ({setCategory}) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <Sidebar setCategory={setCategory} />
            </div>

            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="Inshorts Icon"
                height="85%"
                style={{ cursor: "pointer" }}
            />
        </div>
    )
}

export default Navinshorts