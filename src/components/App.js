import React from "react"

import Header from "./Header"
import TeamSelector from "./TeamSelector"
import TeamList from "./TeamList"

import logo from "./../images/logo.svg"

const App = React.createClass({
    getInitialState() {
        return {
            teams: [],
            rosters: {}
        }
    },

    componentDidMount() {
        fetch("/api/teams")
            .then(res => res.json())
            .then(teams => this.setState({
                teams: teams.map(team => {
                    return {
                        code: team.code,
                        name: team.name,
                        country: team.country,
                        category: team.category
                    }
                }),
                rosters: teams.reduce((a, c) => {
                    return a[c.code] = c.roster
                }, {})
            }))
    },

    render() {
        return (
            <div className="App">
                <Header logo={logo} title="Cycling Transfers" />
                <TeamSelector teams={this.state.teams} />
                <TeamList teams={this.state.teams} rosters={this.state.rosters} />
            </div>
        )
    }
})

export default App
