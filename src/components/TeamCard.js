import React from "react"

import TeamName from "./TeamName"
import TeamInfo from "./TeamInfo"
import TeamTransfers from "./TeamTransfers"

import "./../styles/TeamCard.css"

const TeamCard = ({team, transfers}) => (
    <div>
        {(team) ?
            <div className="team-card">
                <TeamName team={team} />
                <TeamInfo team={team} />
                <TeamTransfers transfers={transfers} />
            </div> 
            : 
            <p>Please Select a Team.</p>
        }
    </div>
)

export default TeamCard
