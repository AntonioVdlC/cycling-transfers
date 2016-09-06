import React from "react"

import img from "./../utils/importImage"

const TeamTransferDetails = React.createClass({
    render() {
        return (
            <div className="transfer-details">
                <img className="transfer-logo" src={img(`/icons/${this.props.type}.png`)} alt={this.props.type} />
                <ul className="transfer-details-list">
                    {this.props.transfers.map((rider, index) => {
                        return (
                            <li key={this.props.type + "-" + index}>
                                <img className="flag" src={img(`/flags/${rider.country}.svg`)} alt={rider.country} /> - 
                                <span>{rider.lastname.toUpperCase()} {rider.firstname}</span> 
                                <span>{(this.props.type === "in") ? rider.from : (this.props.type === "out") ? rider.to : ""}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
})

export default TeamTransferDetails
