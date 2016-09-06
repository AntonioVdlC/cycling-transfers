import React from "react"

import img from "./../utils/importImage"

import "./../styles/TeamInfo.css"

const TeamInfo = React.createClass({
    render() {
        return (
            <div className="team-info">
                <img className="team-flag" src={img(`/flags/${this.props.team.country}.svg`)} alt={this.props.team.country} /> 
                <span className="team-name">{this.props.team.name}</span>
                <img className="team-shirt" src={img(`/teams/${this.props.team.code}.jpg`)} alt={this.props.team.code} />
            </div>
        )
    }
})

export default TeamInfo
