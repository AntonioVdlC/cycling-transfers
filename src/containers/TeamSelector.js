import React from "react"
import { connect } from "react-redux"
import { showTeam } from "./../actions"

import teams from "./../../data/teams.json"

import "./../styles/TeamSelector.css"

let TeamSelector = ({dispatch}) => (
    <div className="team-selector">
        <label htmlFor="team-select">Go to: </label>
        <select id="team-select" onChange={(e) => {
            if(!e.target.value) return
            dispatch(showTeam(e.target.value))
            e.target.value = ""
        }}>
            <option value="">-</option>
            {teams.map((team) => 
                <option key={team.code} value={`${team.code}`}>
                    {team.name}
                </option>
            )}
        </select>
    </div>
)

TeamSelector = connect()(TeamSelector)

export default TeamSelector
