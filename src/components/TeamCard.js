import React from "react"

import TeamInfo from "./TeamInfo"
import TeamRoster from "./TeamRoster"

const TeamCard = React.createClass({
    render() {
        return (
            <li>
                <TeamInfo 
                    name={this.props.team.name} 
                    country={this.props.team.country} 
                />
                <TeamRoster
                    roster={this.props.roster}
                />
            </li>
        )
    }
})

export default TeamCard
