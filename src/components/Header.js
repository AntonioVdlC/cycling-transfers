import React from "react"

import "./../styles/Header.css"

const Header = React.createClass({
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
            </div>
        )
    }
})

export default Header
