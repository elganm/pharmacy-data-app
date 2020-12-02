import React from "react";

function PharmacyDetails(props){
    return(
        <div>
            <h1>{props.pharmacyName}</h1>
            <h3>{props.pharmacyStreet}</h3>
            <h3>{props.pharmacyArea}</h3>
            <h3>{props.pharmacyTown}</h3>
            <h3>{props.pharmacyPostcode}</h3>
        </div>
    )
};

export default PharmacyDetails;