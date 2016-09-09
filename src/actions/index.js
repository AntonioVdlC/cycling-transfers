import { SHOW_TEAM } from "./types"

export const showTeam = (team) => {
    return {
        type: SHOW_TEAM,
        team: team
    }
}
