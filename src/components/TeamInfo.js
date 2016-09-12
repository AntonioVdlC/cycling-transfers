import React from "react"

import img from "./../utils/importImage"

import "./../styles/TeamInfo.css"

const TeamInfo = ({team}) => (
    <div className="team-info">
        <img className="team-shirt" src={img(`/teams/${team.code}.jpg`)} alt={team.code} />
    </div>
)

export default TeamInfo
