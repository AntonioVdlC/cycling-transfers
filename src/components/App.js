import React from "react"

import Header from "./Header"
import Main from "./Main"

import "./../styles/App.css"

const App = ({params}) => (
    <div className="App">
        <Header title="Cycling Transfers" />
        <Main selectedTeam={params.selectedTeam}/>
    </div>
)

export default App
