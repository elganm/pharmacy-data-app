import React from "react";
import data from './data';
import PharmacyDetails from "./PharmacyDetails";
import PharmacyData from './PharmacyData';
import Search from "./Search";
import Loading from "./Loading";

class FetchData extends React.Component {
    constructor(){
        super()
        this.state = {
            loading:false,
            postcode:"",
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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick() {
        //get the input from search bar
        let typedInPostcode = this.state.postcode

        //format the postcode so it can be searched for in data.js file
        const formatPostcodeRegex = /(^[A-Z]{1,2}[0-9]{1,2})([0-9][A-Z]{2}$)/i
        const formattedPostcode = typedInPostcode.replace(formatPostcodeRegex, "$1 $2").toUpperCase()

        //find the contractor address that matched with the postcode that user searched for
        const searchForPharm = data["Contractor Addresses"].filter(item => (item["Post Code"] === formattedPostcode));
        
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
        
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState(
                {
                    loading:false,
                    userSearched: true,
                    errorMessage: null,
                    pharmacyName: nameOfPharm,
                    pharmacyStreet: streetOfPharm,
                    pharmacyArea: areaOfPharm,
                    pharmacyTown: townOfPharm,
                    pharmacyPostcode: postcodeOfPharm,
                    percentageMoreOrLess: percentageEquation,
                    textMoreOrLess:moreOrLessModifier,
                    searchPharmNumItemsPerMonth: searchedPharmTotalNumItems
                })
            }, 1500)
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
                    {this.state.loading ? <Loading/> 
                    : 
                    <div>
                        <Search
                            postcode={this.state.postcode}
                            handleChange={this.handleChange}
                            handleClick = {this.handleClick}
                            errorMessage = {this.state.errorMessage}
                        /> 
        
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
                    }
                </div>
              )
}
}
export default FetchData;