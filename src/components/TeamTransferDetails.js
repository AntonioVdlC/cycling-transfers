import React from "react"

import img from "./../utils/importImage"

import "./../styles/TeamTransferDetails.css"

const TeamTransferDetails = ({type, transfers}) => (
    <div className="transfer-details">
        <img className="transfer-logo" src={img(`/icons/${type}.png`)} alt={type} />
        <ul className="transfer-details-list">
            {transfers.map((rider, index) => {
                return (
                    <li className="transfer-details-list-element" key={type + "-" + index}>
                        <img className="rider-flag" src={img(`/flags/${rider.country}.svg`)} alt={rider.country} />
                        <span className="rider-name">{rider.lastname.toUpperCase()} {rider.firstname}</span> 
                        <span className="rider-transfer-team">{(type === "in") ? ((rider.from.length === 3) ? <a href={`#${rider.from}`}>{rider.from}</a> : rider.from) : (type === "out") ? ((rider.to.length === 3) ? <a href={`#${rider.to}`}>{rider.to}</a> : rider.to) : ""}</span>
                    </li>
                )
            })}
        </ul>
    </div>
)

export default TeamTransferDetails
