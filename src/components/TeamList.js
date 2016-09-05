import React from "react"

import TeamCard from "./TeamCard"

const TeamList = React.createClass({
    render() {
        return (
            <ul>
                {this.props.teams.map(team => 
                    <TeamCard 
                        key={team.code} 
                        team={team} 
                        transfers={this.props.transfers[team.code]} 
                    />
                )}
            </ul>
        )
    }
})

export default TeamList
