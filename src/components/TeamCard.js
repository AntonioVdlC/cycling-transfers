import React from "react"

import TeamInfo from "./TeamInfo"
import TeamTransfers from "./TeamTransfers"

const TeamCard = React.createClass({
    render() {
        return (
            <li>
                <TeamInfo 
                    name={this.props.team.name} 
                    country={this.props.team.country} 
                />
                <TeamTransfers
                    transfers={this.props.transfers}
                />
            </li>
        )
    }
})

export default TeamCard
