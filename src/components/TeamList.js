import React from "react"

import TeamCard from "./TeamCard"

import "./../styles/TeamList.css"

const TeamList = React.createClass({
    render() {
        return (
            <ul className="team-list">
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
