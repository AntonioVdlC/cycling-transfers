import React from "react"

import TeamTransferDetailsListElement from "./../containers/TeamTransferDetailsListElement"

import img from "./../utils/importImage"

import "./../styles/TeamTransferDetails.css"

const TeamTransferDetails = ({type, transfers}) => (
    <div className="transfer-details">
        <img className="transfer-logo" src={img(`/icons/${type}.png`)} alt={type} />
        <ul className="transfer-details-list">
            {transfers.map((rider, index) => {
                return (
                    <TeamTransferDetailsListElement 
                        key={type + "-" + index}
                        rider={rider}
                        type={type} 
                    />
                )
            })}
        </ul>
    </div>
)

export default TeamTransferDetails
