import React from "react"

import Header from "./Header"
import TeamSelector from "./TeamSelector"
import TeamList from "./TeamList"

import "./../styles/App.css"

import teams from "./../../data/teams.json"
import transfers from "./../../data/transfers.json"

import getTeams from "./../utils/getTeams"
import getTransfers from "./../utils/getTransfers"

const App = React.createClass({
    getInitialState() {
        return {
            teams: getTeams(teams),
            transfers: getTransfers(teams, transfers)
        }
    },
    
    handleTeamSelect(e) {
        if (e.target.value)
            window.location = "#" + e.target.value
    },

    render() {
        return (
            <div className="App">
                <header className="header">
                    <Header title="Cycling Transfers" />
                </header>
                <main className="main">
                    <TeamSelector 
                        teams={this.state.teams}
                        onSelect={this.handleTeamSelect}
                    />
                    <TeamList 
                        teams={this.state.teams} 
                        transfers={this.state.transfers}
                    />
                </main>
            </div>
        )
    }
})

export default App
