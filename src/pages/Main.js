import React, { useState } from "react";
import "../App.css";
import countriesAll from "../countriesAll.json";
import Card from "../component/Card";

function Main({ goToPage }) {
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("-1");
  const [regions, setRegions] = useState(createRegionArray());

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function searchFilter(country) {
    let re = new RegExp(searchText, "i");
    const isCountry = re.test(country.name);
    const isCapital = re.test(country.capital);
    const isSelectedRegion =
      selectedRegion === "-1"
        ? true
        : country.region === regions[parseInt(selectedRegion)]
        ? true
        : false;

    return (isCapital || isCountry) && isSelectedRegion;
  }

  function handleSelect(e) {
    setSelectedRegion(e.target.value);
  }

  function createRegionArray() {
    let arr = [];
    countriesAll.forEach((country) => {
      if (arr.indexOf(country.region) === -1) {
        arr.push(country.region);
      }
    });
    return arr;
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
        <div className="col c-md-6 rounded">
          <select
            className="form-select"
            onChange={handleSelect}
            value={selectedRegion}
            aria-label="Default select example"
          >
            <option value="-1">Filter by Region</option>
            {regions.map((region, index) => (
              <option key={index} value={index}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mainContainer row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {countriesAll.filter(searchFilter).map((country, index) => {
          return <Card key={index} country={country} onclick={()=>goToPage("info")} />;
        })}
      </div>
    </div>
  );
}

export default Main;
