import "./App.css";
import countriesAll from "./countriesAll.json";
import Card from "./component/Card";
import React, { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function searchFilter(country) {
    let re = new RegExp(searchText, "i");
    const isCountry = re.test(country.name);
    const isCapital = re.test(country.capital);

    return isCapital || isCountry;
  }

  return (
    <div className="App container">
      <div className="row justify-content-start">
        <div className="col col-md-6 rounded">
          <input
            type="search"
            className="form-control rounded"
            id="searchBox"
            placeholder="Search for a country"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="mainContainer row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {countriesAll.filter(searchFilter).map((country, index) => {
          return <Card key={index} country={country} />;
        })}
      </div>
    </div>
  );
}

export default App;
