import React from "react"

import TeamTransferDetails from "./TeamTransferDetails"

const TeamTransfers = React.createClass({
    render() {
        const types = ["out", "in", "renew", "contract"]
        return (
            <div>
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
