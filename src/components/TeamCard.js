import React from "react"

import TeamInfo from "./TeamInfo"
import TeamTransfers from "./TeamTransfers"

const TeamCard = React.createClass({
    render() {
        return (
            <li>
                <TeamInfo team={this.props.team} />
                <TeamTransfers transfers={this.props.transfers} />
            </li>
        )
    }
})

export default TeamCard
