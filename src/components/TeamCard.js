import React from "react"

import TeamInfo from "./TeamInfo"
import TeamTransfers from "./TeamTransfers"

import "./../styles/TeamCard.css"

const TeamCard = ({team, transfers}) => (
    <li className="team-card" id={team.code}>
        <TeamInfo team={team} />
        <TeamTransfers transfers={transfers} />
    </li>
)

export default TeamCard
