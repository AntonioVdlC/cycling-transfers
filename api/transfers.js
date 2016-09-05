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
            })

            out = transfers.filter((transfer) => {
                return transfer.from === team.code 
                    && transfer.to !== team.code
            })
            
            renew = transfers.filter((transfer) => {
                return transfer.from === team.code 
                    && transfer.to === team.code
            })
            
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
            })

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
