import React from "react"

function Search(props){
    return(
    <div className="search-container">
        <div className = "search-form">
            <input  name="postcode" value={props.postcode} type="text" placeholder="Search by pharmacy postcode" onChange={props.handleChange} className="search-bar" name="postcode" />
            <button onClick={props.handleClick}>Search</button>
        </div>
        <small>{props.errorMessage}</small>
    </div>
    )
}

export default Search