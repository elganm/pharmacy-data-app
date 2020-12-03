import React from "react";
import data from './data';
import PharmacyDetails from "./PharmacyDetails";
import PharmacyData from './PharmacyData';

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
        let typedInPostcode = document.getElementById("input_id").value;
        //find the contractor address that matched with the postcode that user searched for
        const searchForPharm = data["Contractor Addresses"].filter(item => (item["Post Code"] === typedInPostcode));
        //get details of the pharmacy the user searched for
        const nameOfPharm = searchForPharm.map(item => item["Trading Name"]);
        const streetOfPharm = searchForPharm.map(item => item["Street"]);
        const areaOfPharm = searchForPharm.map(item => item["Area"]);
        const townOfPharm = searchForPharm.map(item => item["Post Town"]);
        const postcodeOfPharm = searchForPharm.map(item => item["Post Code"]);
        //get contractor number id so we can see how many items a month the pharmacy has done
        //get data of the pharmacy the user searched for
        let contractorNumIdArray = searchForPharm.map(item => item["Account Number"])
        let contractorNumIdString = contractorNumIdArray.join()
        const pharmacyDataObject = data["Pharmacy items by Practice"].filter(item => (item["Contractor"] === contractorNumIdString))
        const arrayOfPharmItems = pharmacyDataObject.map(item => parseInt(item["Total Items"]))
        const searchedPharmTotalNumItems = arrayOfPharmItems.reduce((a, b) => a + b, 0)

        this.setState(
            {
                pharmacyName: nameOfPharm,
                pharmacyStreet: streetOfPharm,
                pharmacyArea: areaOfPharm,
                pharmacyTown: townOfPharm,
                pharmacyPostcode: postcodeOfPharm,
                percentageMoreOrLess:"",
                textMoreOrLess:"",
                searchPharmNumItemsPerMonth: searchedPharmTotalNumItems
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
                <PharmacyData
                    percentageMoreOrLess=""
                    textMoreOrLess=""
                    pharmacyName={this.state.pharmacyName}
                    searchPharmNumItemsPerMonth={this.state.searchPharmNumItemsPerMonth}
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