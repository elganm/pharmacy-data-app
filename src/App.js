import './App.css';
import data from './data';

function App(props) {

  //filer contractor addresses with postcode that user will search for
  const dataItemCheck = data["Contractor Addresses"].filter((item) => (item["Post Code"] === "NP44 1DZ"));
  //map Contractor Addresses for account number to cross-reference with the number of prescription items later
  const dataItem = data["Contractor Addresses"].map(item =>  item["Account Number"]);
  //get trading name for the pharmacy the user searched for
  const dataItemName = dataItemCheck.map(item => item["Trading Name"]);
 


  return (
    <div>
      <form>
        <label>
          Postcode:
        <input type="text" name="postcode"/>
        </label>
        <input type="submit" value="submit" />
      </form>
      
      <h1>{dataItem}</h1>
  <h2>{dataItemName}</h2>
    </div>
  );
}

export default App;
