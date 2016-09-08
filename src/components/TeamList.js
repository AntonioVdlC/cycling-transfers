import React from "react"

import TeamCard from "./TeamCard"

import "./../styles/TeamList.css"

const TeamList = ({teams, transfers}) => (
    <ul className="team-list">
        {teams.map(team => 
            <TeamCard 
                key={team.code} 
                team={team} 
                transfers={transfers[team.code]} 
            />
        )}
    </ul>
)

export default TeamList
