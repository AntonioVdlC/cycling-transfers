import React from "react"

import TeamTransferDetails from "./TeamTransferDetails"

import "./../styles/TeamTransfers.css"

const TeamTransfers = ({transfers}) => {
    const types = ["out", "in", "renew", "contract"]
    return (
        <div className="team-transfers">
            {types.map((type) =>
                (transfers[type].length) ?
                <TeamTransferDetails 
                    key={type + "-details"}
                    type={`${type}`} 
                    transfers={transfers[type]} 
                /> : ""
            )}
        </div>
    )
}

export default TeamTransfers
