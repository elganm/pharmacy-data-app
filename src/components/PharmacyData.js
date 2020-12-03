import React from "react";

function PharmacyData(props){
    return(
        <div>
            <h1>This pharmacy does (percentage:{props.percentageMoreOrLess})% (more/less:{props.textMoreOrLess}) items per month than the average Welsh pharmacy.</h1>
            <h2>{props.pharmacyName} number of items: (number of items per month:{props.searchPharmNumItemsPerMonth})</h2>
            <h2>Average Welsh pharmacy number of items: (variable that contains the amount of items the average welsh pharmacy does per month)</h2>
        </div>
    )
}

export default PharmacyData;