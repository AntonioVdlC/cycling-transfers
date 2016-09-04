import React from "react"

const TeamInfo = React.createClass({
    render() {
        return (
            <span>
                {this.props.name} - {this.props.country}
            </span>
        )
    }
})

export default TeamInfo
