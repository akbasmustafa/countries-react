import React from "react";
import "../App.css";
import countriesAll from "../countriesAll.json";

function CardDetail({ country, goToPage }) {
  console.log(country);
  return (
    <div className="row m-5">
      <div className="col-12 col-md-6">
        <img className="w-100 h-100" src={country.flag} alt={country.name} />
      </div>
      <div className="col-12 col-md-6 p-4">
        <h4>{country.name}</h4>
        <div className="row">
          <div className="col-12 col-md-6 p-t-5">
            <p>
              <b>Native Name: </b>
              {country.nativeName}
            </p>
            <p>
              <b>Population: </b>
              {country.population}
            </p>
            <p>
              <b>Region: </b>
              {country.region}
            </p>
            <p>
              <b>Sub Region:</b>
              {country.subregion}
            </p>
            <p>
              <b>Capital: </b>
              {country.capital}
            </p>
          </div>
          <div className="col-12 col-md-6 p-t-5">
            <p>
              <b>Top Level Domain: </b>
              {country.topLevelDomain[0]}
            </p>
            <p>
              <b>Currencies: </b>
              {country.currencies.map((item, index) => (
                <span key={index} className="border rounded p-1">
                  {item.name}
                </span>
              ))}
            </p>
            <p>
              <b>Languages: </b>
              {country.languages.map((item, index) => (
                <span key={index} className="border rounded p-1">
                  {item?.name}
                </span>
              ))}
            </p>
          </div>
        </div>
        <p>
          <b>Border Countries:</b>
          {country.borders.map((item, index) => (
            <span
              key={index}
              onClick={() =>
                goToPage(
                  "info",
                  countriesAll.find((country) => country.alpha3Code === item)
                )
              }
              className="border rounded p-1 m-1"
            >
              {countriesAll.find((country) => country.alpha3Code === item).name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default CardDetail;
