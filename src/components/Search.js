import React from "react";
import data from './data';
import PharmacyDetails from "./PharmacyDetails";
//import PharmacyDetails from './components/PharmacyDetails';
//import PharmacyData from './components/PharmacyData';

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            pharmacyName: "",
            pharmacyStreet:"",
            pharmacyArea:"",
            pharmacyTown:"",
            pharmacyPostcode:""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let typedPostcode = document.getElementById("input_id").value;
        //filter contractor addresses with postcode that user will search for
        const dataItemCheck = data["Contractor Addresses"].filter((item) => (item["Post Code"] === typedPostcode));
        //get trading name for the pharmacy the user searched for
        const dataItemName = dataItemCheck.map(item => item["Trading Name"]);
        const dataItemStreet = dataItemCheck.map(item => item["Street"]);
        const dataItemArea = dataItemCheck.map(item => item["Area"]);
        const dataItemTown = dataItemCheck.map(item => item["Post Town"]);
        const dataItemPostcode = dataItemCheck.map(item => item["Post Code"]);
        this.setState(
            {
                pharmacyName: dataItemName,
                pharmacyStreet: dataItemStreet,
                pharmacyArea: dataItemArea,
                pharmacyTown: dataItemTown,
                pharmacyPostcode: dataItemPostcode
            })
      }

    render(){
        return (
            <div>
                <h1>Lorem ipsum</h1>
                <h2>Lorem ipsum</h2>
                <div className="search-container">
                    <div className = "search-form">
                        <input id="input_id" type="text" className="search-bar" name="postcode" placeholder="Search by pharmacy postcode"/>
                        <button onClick={this.handleClick}>X</button>
                    </div>
                </div>
                <PharmacyDetails
                    pharmacyName={this.state.pharmacyName} 
                    pharmacyStreet={this.state.pharmacyStreet}
                    pharmacyArea={this.state.pharmacyArea}
                    pharmacyTown={this.state.pharmacyTown}
                    pharmacyPostcode={this.state.pharmacyPostcode}
                    />
            </div>
              )
    }
}

/*
function Search (){

   function getPostcode(){
        let typedPostcode = document.getElementById("input_id").value;
          console.log(typedPostcode)
      };

      return (
        <div>
            <h1>Lorem ipsum</h1>
            <h2>Lorem ipsum</h2>
            <div className="search-container">
                <form className = "search-form">
                    <input id="input_id" type="search" className="search-bar" name="postcode" placeholder="Search by pharmacy postcode"/>
                    <button onClick= {getPostcode} />
                </form>
            </div>
        </div>
          )
    };

*/

export default Search;