import React from "react"

import Header from "./Header"
import TeamSelector from "./TeamSelector"
import TeamList from "./TeamList"

import "./../styles/App.css"

const App = React.createClass({
    getInitialState() {
        return {
            teams: [],
            transfers: {}
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
