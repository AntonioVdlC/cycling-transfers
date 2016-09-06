const teams = require("../data/teams.json")
const transfers = require("../data/transfers.json")

module.exports = (req, res) => {
    res.json(teams
        .filter(team => team.code)
        .reduce((teamTransfers, team) => {
            let join, out, renew, contract

            join = transfers.filter((transfer) => {
                return transfer.from !== team.code 
                    && transfer.to === team.code
            }).sort(byName)

            out = transfers.filter((transfer) => {
                return transfer.from === team.code 
                    && transfer.to !== team.code
            }).sort(byName)
            
            renew = transfers.filter((transfer) => {
                return transfer.from === team.code 
                    && transfer.to === team.code
            }).sort(byName)
            
            contract = team.roster.filter((rider) => {
                return !(
                    out.some(r => { 
                        return r.firstname === rider.firstname 
                            && r.lastname === rider.lastname
                    })
                    || renew.some(r => { 
                        return r.firstname === rider.firstname 
                            && r.lastname === rider.lastname
                    })
                )
            }).sort(byName)

            teamTransfers[team.code] = {
                in: join,
                out: out,
                renew: renew,
                contract: contract
            }

            return teamTransfers
        }, {})
    )
}

function byName (a, b) {
    return (a.lastname + a.firstname > b.lastname + b.firstname) ? 1 : (a.lastname + a.firstname < b.lastname + b.firstname) ? -1 : 0
}
