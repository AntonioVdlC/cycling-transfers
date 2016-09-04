import React from 'react'

const Header = React.createClass({
    render: function () {
        return (
            <div className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <h2>{this.props.title}</h2>
            </div>
        )
    }
})

export default Header
