const teams = require("../data/teams.json")
const transfers = require("../data/transfers.json")

module.exports = (req, res) => {
    res.json(teams
        .filter(team => team.code)
        .reduce((rosters, team) => {
            rosters[team.code] = team.roster
            return rosters
        }, {})
    )
}
