import React from "react";

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
      
export default Search;