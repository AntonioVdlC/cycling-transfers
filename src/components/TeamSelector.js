import React from "react"

import "./../styles/TeamSelector.css"

const TeamSelector = React.createClass({
    handleChange(e) {
        window.location = (e.target.value) ? "#" + e.target.value : ""
    },

    render() {
        return (
            <div className="team-selector">
                <label htmlFor="team-select">Go to: </label>
                <select id="team-select" onChange={this.handleChange}>
                    <option value="">-</option>
                    {this.props.teams.map((team) => 
                        <option key={team.code} value={`${team.code}`}>
                            {team.name}
                        </option>
                    )}
                </select>
            </div>
        )
    }
})

export default TeamSelector
