import React from "react"

const Header = React.createClass({
    render() {
        return (
            <div className="header">
                <img src={this.props.logo} className="logo" alt="logo" />
                <h2>{this.props.title}</h2>
            </div>
        )
    }
})

export default Header
