import React from "react";

function PharmacyDetails(props){
    if (props.userSearched){
        return(
            <div>
                <h1>{props.pharmacyName}</h1>
                <h3>{props.pharmacyStreet}</h3>
                <h3>{props.pharmacyArea}</h3>
                <h3>{props.pharmacyTown}</h3>
                <h3>{props.pharmacyPostcode}</h3>
            </div>
        )
}
    else{
        return null
    }
};

export default PharmacyDetails;