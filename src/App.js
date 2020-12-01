import './App.css';
import Search from "./components/Search";
import GetPharmacyDetails from './components/GetPharmacyDetails';
import GetPharmacyData from './components/GetPharmacyData';

function App(props) {
  return(
    <div>
      <Search/>
      <GetPharmacyDetails/>
      <GetPharmacyData/>
    </div>
  )
};

export default App;
