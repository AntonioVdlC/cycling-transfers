export default function getTeams (teams) {
    return teams
        .filter((team) => team.code)
        .map((team) => {
            return {
                code: team.code,
                name: team.name,
                country: team.country,
                category: team.category
            }
        })
}
