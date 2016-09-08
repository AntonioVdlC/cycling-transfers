import React from "react"

import img from "./../utils/importImage"

import "./../styles/TeamInfo.css"

const TeamInfo = ({team}) => (
    <div className="team-info">
        <img className="team-flag" src={img(`/flags/${team.country}.svg`)} alt={team.country} /> 
        <span className="team-name">{team.name}</span>
        <img className="team-shirt" src={img(`/teams/${team.code}.jpg`)} alt={team.code} />
    </div>
)

export default TeamInfo
