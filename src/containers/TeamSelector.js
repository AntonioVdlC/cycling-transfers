import React from "react"

import { connect } from "react-redux"
//import { showTeam } from "./../actions"

import { browserHistory } from "react-router"

import teamsJSON from "./../../data/teams.json"

import getTeams from "./../utils/getTeams"
import getCategories from "./../utils/getCategories"

import "./../styles/TeamSelector.css"

const teams = getTeams(teamsJSON)
const categories = getCategories(teamsJSON)

let TeamSelector = ({selectedTeam, dispatch}) => (
    <div className="team-selector">
        <label htmlFor="team-select">Go to: </label>
        <select id="team-select" value={selectedTeam} onChange={(e) => {
            if(!e.target.value) return
            browserHistory.push(`/${e.target.value}`)
        }}>
            <option value="">-</option>
            {categories.map((category) => 
                <optgroup key={category} label={category}>
                {teams
                    .filter((team) => team.category === category)
                    .map((team) => 
                    <option key={team.code} value={`${team.code}`}>
                        {team.name}
                    </option>
                )}
                </optgroup>
            )}
        </select>
    </div>
)

TeamSelector = connect()(TeamSelector)

export default TeamSelector
