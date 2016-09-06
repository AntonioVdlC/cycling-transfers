import React from "react"

import TeamInfo from "./TeamInfo"
import TeamTransfers from "./TeamTransfers"

import "./../styles/TeamCard.css"

const TeamCard = React.createClass({
    render() {
        return (
            <li className="team-card" id={this.props.team.code}>
                <TeamInfo team={this.props.team} />
                <TeamTransfers transfers={this.props.transfers} />
            </li>
        )
    }
})

export default TeamCard
