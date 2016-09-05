import React from "react"

import img from "./../utils/importImage"

const TeamInfo = React.createClass({
    render() {
        return (
            <span>
                <img className="flag" src={img(`/flags/${this.props.team.country}.svg`)} alt={this.props.team.country} /> {this.props.team.name} ({this.props.team.code})
            </span>
        )
    }
})

export default TeamInfo
