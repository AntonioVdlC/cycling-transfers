export default function getCategories (teams) {
    return [...new Set(teams.map(team => team.category))]
}
