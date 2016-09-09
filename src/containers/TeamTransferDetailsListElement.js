import React from "react"
import { connect } from "react-redux"
import { showTeam } from "./../actions"

import img from "./../utils/importImage"

import "./../styles/TeamTransferDetailsListElement.css"

let TeamTransferDetailsListElement = ({rider, type, dispatch}) => (
    <li className="transfer-details-list-element">
        <img className="rider-flag" src={img(`/flags/${rider.country}.svg`)} alt={rider.country} />
        <span className="rider-name">{rider.lastname.toUpperCase()} {rider.firstname}</span> 
        <span className="rider-transfer-team">{(type === "in") ? ((rider.from.length === 3) ? <span className="transfer-details-list-element-team-link" onClick={() => dispatch(showTeam(rider.from))}>{rider.from}</span> : rider.from) : (type === "out") ? ((rider.to.length === 3) ? <span className="transfer-details-list-element-team-link" onClick={() => dispatch(showTeam(rider.to))}>{rider.to}</span> : rider.to) : ""}</span>
    </li>
)


TeamTransferDetailsListElement = connect()(TeamTransferDetailsListElement)

export default TeamTransferDetailsListElement