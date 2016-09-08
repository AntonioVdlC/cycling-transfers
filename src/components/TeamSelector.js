import React from "react"

import "./../styles/TeamSelector.css"

const TeamSelector = ({teams, onSelect}) => (
    <div className="team-selector">
        <label htmlFor="team-select">Go to: </label>
        <select id="team-select" onChange={onSelect}>
            <option value="">-</option>
            {teams.map((team) => 
                <option key={team.code} value={`${team.code}`}>
                    {team.name}
                </option>
            )}
        </select>
    </div>
)

export default TeamSelector
