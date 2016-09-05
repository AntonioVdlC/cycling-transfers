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
        const urls = [
            "/api/teams",
            "/api/transfers"          
        ]

        Promise.all(urls.map(url => 
            fetch(url).then(res => res.json())
        )).then(data => {
            this.setState({
                teams: data[0],
                transfers: data[1]
            })
        })
    },

    render() {
        return (
            <div className="App">
                <Header logo={logo} title="Cycling Transfers" />
                <TeamSelector teams={this.state.teams} />
                <TeamList 
                    teams={this.state.teams} 
                    transfers={this.state.transfers}
                />
            </div>
        )
    }
})

export default App
