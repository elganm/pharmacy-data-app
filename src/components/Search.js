import React from "react";
import data from './data';
import PharmacyDetails from "./PharmacyDetails";
import PharmacyData from './PharmacyData';

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            userSearched:false,
            errorMessage: "",
            pharmacyName: "",
            pharmacyStreet:"",
            pharmacyArea:"",
            pharmacyTown:"",
            pharmacyPostcode:"",
            percentageMoreOrLess:"",
            textMoreOrLess:"",
            searchPharmNumItemsPerMonth: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let typedInPostcode = document.getElementById("input_id").value;
        //find the contractor address that matched with the postcode that user searched for
        const searchForPharm = data["Contractor Addresses"].filter(item => (item["Post Code"] === typedInPostcode));
        
        if (searchForPharm.length > 0){
        //get details of the pharmacy the user searched for
        const nameOfPharm = searchForPharm.map(item => item["Trading Name"]);
        const streetOfPharm = searchForPharm.map(item => item["Street"]);
        const areaOfPharm = searchForPharm.map(item => item["Area"]);
        const townOfPharm = searchForPharm.map(item => item["Post Town"]);
        const postcodeOfPharm = searchForPharm.map(item => item["Post Code"]);
        //get contractor number id so we can see how many items a month the pharmacy has done
        //get data of the pharmacy the user searched for
        const contractorNumIdArray = searchForPharm.map(item => item["Account Number"])
        const contractorNumIdString = contractorNumIdArray.join()
        const pharmacyDataObject = data["Pharmacy items by Practice"].filter(item => (item["Contractor"] === contractorNumIdString))
        const arrayOfPharmItems = pharmacyDataObject.map(item => parseInt(item["Total Items"]))
        const searchedPharmTotalNumItems = arrayOfPharmItems.reduce((a, b) => a + b, 0)

        //get searched pharmacy percentage more or less items compared to avg welsh pharmacy
        //((searched for pharmacy items - avg welsh pharm items)/avg welsh pharm items)*100
        const itemDifferenceBetweenPharms = searchedPharmTotalNumItems-7000;
        const percentageEquation = Math.abs(parseInt((itemDifferenceBetweenPharms/7000)*100));
        const moreOrLessModifier = itemDifferenceBetweenPharms >0 ? "more":"less";
        this.setState(
            {
                userSearched: true,
                pharmacyName: nameOfPharm,
                pharmacyStreet: streetOfPharm,
                pharmacyArea: areaOfPharm,
                pharmacyTown: townOfPharm,
                pharmacyPostcode: postcodeOfPharm,
                percentageMoreOrLess: percentageEquation,
                textMoreOrLess:moreOrLessModifier,
                searchPharmNumItemsPerMonth: searchedPharmTotalNumItems
            })
        }
        else{
            this.setState({
                errorMessage: "Sorry, we don't have a pharmacy with that postcode"
            })
        }
      }

    render(){
        return (
                <div>
                    <h1>Lorem ipsum</h1>
                    <h2>Lorem ipsum</h2>
                    <div className="search-container">
                        <div className = "search-form">
                            <input id="input_id" type="text" className="search-bar" name="postcode" placeholder="Search by pharmacy postcode"/>
                            <button onClick={this.handleClick}>Search</button>
                        </div>
                        <small>{this.state.errorMessage}</small>
                    </div>
                    <PharmacyDetails
                        userSearched = {this.state.userSearched}
                        pharmacyName={this.state.pharmacyName} 
                        pharmacyStreet={this.state.pharmacyStreet}
                        pharmacyArea={this.state.pharmacyArea}
                        pharmacyTown={this.state.pharmacyTown}
                        pharmacyPostcode={this.state.pharmacyPostcode}
                        />
                    <PharmacyData
                        userSearched = {this.state.userSearched}
                        percentageMoreOrLess={this.state.percentageMoreOrLess}
                        textMoreOrLess={this.state.textMoreOrLess}
                        pharmacyName={this.state.pharmacyName}
                        searchPharmNumItemsPerMonth={this.state.searchPharmNumItemsPerMonth}
                    />
                </div>
              )
}
}
export default Search;