import React from "react" ;

function PharmacyData(props){
    return(
        <div>
            <h1>This pharmacy does (percentage)% (more/less) items per month than the average Welsh pharmacy.</h1>
            <h2>(searched for pharmacy) number of items: (number of items per month)</h2>
            <h2>Average Welsh pharmacy number of items: (variable that contains the amount of items the average welsh pharmacy does per month)</h2>
        </div>
    )
}

export default PharmacyData;