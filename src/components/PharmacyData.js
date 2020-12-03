import React from "react";
import data from "./data.js";

function PharmacyData(props){

        const everyPharmTotalItems = data["Pharmacy items by Practice"].map(item => parseInt(item["Total Items"]))
        const sumOfTotalItems = everyPharmTotalItems.reduce((a, b) => a + b, 0)
        const numWelshPharms = 2 //actual number = 716
        const avgWelshPharmItems = sumOfTotalItems/numWelshPharms

    return(
        <div>
            <h1>This pharmacy dispenses (percentage:{props.percentageMoreOrLess})% (more/less:{props.textMoreOrLess}) items per month than the average Welsh pharmacy.</h1>
            <h2>{props.pharmacyName} dispenses {props.searchPharmNumItemsPerMonth} items per month</h2>
            <h2>The average Welsh pharmacy dispenses {avgWelshPharmItems} items per month</h2>
        </div>
    )
}

export default PharmacyData;