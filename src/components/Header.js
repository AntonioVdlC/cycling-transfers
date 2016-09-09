import React from "react"

import "./../styles/Header.css"

const Header = ({title}) => (
    <header className="header">
        <div>
            <h1 className="title">{title}</h1>
        </div>
    </header>
)

export default Header
