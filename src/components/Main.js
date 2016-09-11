import React from "react"

import TeamSelector from "./../containers/TeamSelector"
import TeamSelected from "./../containers/TeamSelected"

const Main = ({selectedTeam}) => (
    <main className="main">
        <TeamSelector selectedTeam={selectedTeam} />
        <TeamSelected selectedTeam={selectedTeam} />
    </main>
)

export default Main
