import { connect } from "react-redux"

import TeamCard from "./../components/TeamCard"

import teamsJSON from "./../../data/teams.json"
import transfersJSON from "./../../data/transfers.json"

import getTeams from "./../utils/getTeams"
import getTransfers from "./../utils/getTransfers"

const teams = getTeams(teamsJSON)
const transfers = getTransfers(teamsJSON, transfersJSON)

const getSelectedTeamInfo = (teamCode) => {
    return {
        team: teams.find((team) => team.code === teamCode),
        transfers: transfers[teamCode]
    }
}

const mapStateToProps = (state) => {
    return getSelectedTeamInfo(state.selectedTeam)
}

const TeamSelected = connect(
    mapStateToProps
)(TeamCard)

export default TeamSelected
