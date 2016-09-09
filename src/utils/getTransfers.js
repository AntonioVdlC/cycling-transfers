import byName from "./sortByName"

export default function (teams, transfers) {
    return teams
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
}
