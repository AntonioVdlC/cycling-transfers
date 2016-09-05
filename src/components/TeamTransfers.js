import React from "react"

import TeamTransfersDetails from "./TeamTransfersDetails"

const TeamTransfers = React.createClass({
    render() {
        const types = ["out", "in", "renew", "contract"]
        return (
            <div>
                {types.map((type) =>
                    <TeamTransfersDetails 
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
