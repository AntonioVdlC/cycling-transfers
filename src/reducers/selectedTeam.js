import { SHOW_TEAM } from "./../actions/types"

const selectedTeam = (state = "", action) => {
    switch(action.type) {
        case SHOW_TEAM:
            return action.team
        default:
            return state
    }
}

export default selectedTeam
