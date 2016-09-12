import React from "react"

import img from "./../utils/importImage"

import "./../styles/TeamName.css"

const TeamName = ({team}) => (
    <div className="team-name">
        <img className="team-flag" src={img(`/flags/${team.country}.svg`)} alt={team.country} /> 
        <h2 className="team-name-title">{team.name}</h2>
    </div>
)

export default TeamName
