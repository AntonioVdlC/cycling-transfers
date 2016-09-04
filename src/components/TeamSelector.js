import React from "react"

const TeamSelector = React.createClass({
    render() {
        return (
            <div className="team-selector">
                <label htmlFor="team-select">Go to: </label>
                <select id="team-select">
                    <option value="0">-</option>
                    {this.props.teams.map((team) => <option key={team.code} value={`${team.code}`}>{team.name}</option>)}
                </select>
            </div>
        )
    }
})

export default TeamSelector
