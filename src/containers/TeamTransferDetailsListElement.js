import React from "react"

import { connect } from "react-redux"
//import { showTeam } from "./../actions"

import { Link } from "react-router"

import img from "./../utils/importImage"

import "./../styles/TeamTransferDetailsListElement.css"

let TeamTransferDetailsListElement = ({rider, type, dispatch}) => (
    <li className="transfer-details-list-element">
        <img className="rider-flag" src={img(`/flags/${rider.country}.svg`)} alt={rider.country} />
        <span className="rider-name">
            {rider.lastname.toUpperCase()} {rider.firstname}
        </span> 
        <span className="rider-transfer-team">{
            (type === "in") ? 
                ((rider.from.length === 3) ? 
                    <Link 
                        to={rider.from} 
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        {rider.from}
                    </Link> : 
                    rider.from
                ) : 
            (type === "out") ? 
                ((rider.to.length === 3) ?
                    <Link 
                        to={rider.to}
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        {rider.to}
                    </Link> : 
                    rider.to
                ) : 
            ""
        }</span>
    </li>
)


TeamTransferDetailsListElement = connect()(TeamTransferDetailsListElement)

export default TeamTransferDetailsListElement
