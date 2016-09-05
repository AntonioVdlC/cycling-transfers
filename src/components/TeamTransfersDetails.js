import React from "react"

const TeamTransfersDetails = React.createClass({
    render() {
        return (
            <div>
                <img src="" alt={this.props.type} />
                <ul>
                    {this.props.transfers.map((rider, index) => {
                        return <li key={this.props.type + "-" + index}>{rider.country} - {rider.firstname} {rider.lastname} {(this.props.type === "in") ? rider.from : (this.props.type === "out") ? rider.to : ""}</li>
                    })}
                </ul>
            </div>
        )
    }
})

export default TeamTransfersDetails
