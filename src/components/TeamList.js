import React from "react"

import TeamCard from "./TeamCard"

const TeamList = React.createClass({
    render() {
        return (
            <ul>
                {this.props.teams.map(team => {
                    return <TeamCard key={team.code} team={team} roster={this.props.rosters[team.code]} />
                })}
            </ul>
        )
    }
})

export default TeamList
