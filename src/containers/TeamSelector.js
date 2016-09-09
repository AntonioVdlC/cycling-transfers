import React from "react"
import { connect } from "react-redux"
import { showTeam } from "./../actions"

import teamsJSON from "./../../data/teams.json"

import getTeams from "./../utils/getTeams"

import "./../styles/TeamSelector.css"

const teams = getTeams(teamsJSON)

let TeamSelector = ({dispatch}) => (
    <div className="team-selector">
        <label htmlFor="team-select">Go to: </label>
        <select id="team-select" onChange={(e) => {
            if(!e.target.value) return
            dispatch(showTeam(e.target.value))
            e.target.value = ""
        }}>
            <option value="">-</option>
            <optgroup label="WorldTour">
            {teams
                .filter((team) => team.category === "WorldTour")
                .map((team) => 
                <option key={team.code} value={`${team.code}`}>
                    {team.name}
                </option>
            )}
            </optgroup>
        </select>
    </div>
)

TeamSelector = connect()(TeamSelector)

export default TeamSelector
