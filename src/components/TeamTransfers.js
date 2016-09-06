import React from "react"

import TeamTransferDetails from "./TeamTransferDetails"

import "./../styles/TeamTransfers.css"

const TeamTransfers = React.createClass({
    render() {
        const types = ["out", "in", "renew", "contract"]
        return (
            <div className="team-transfers">
                {types.map((type) =>
                    <TeamTransferDetails 
                        key={type + "-details"}
                        type={`${type}`} 
                        transfers={this.props.transfers[type]} 
                    />
                )}
            </div>
        )
    }
})

export default TeamTransfers
