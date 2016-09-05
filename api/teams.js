const teams = require("../data/teams.json")

module.exports = (req, res) => {
    res.json(teams
        .filter((team) => team.code)
        .map((team) => {
            return {
                code: team.code,
                name: team.name,
                country: team.country,
                category: team.category
            }
        })
    )
}
