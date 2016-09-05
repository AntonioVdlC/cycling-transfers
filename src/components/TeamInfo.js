import React from "react"

const TeamInfo = React.createClass({
    render() {
        return (
            <span>
                {this.props.team.country} - {this.props.team.name} ({this.props.team.code})
            </span>
        )
    }
})

export default TeamInfo
