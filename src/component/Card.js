import React from "react";
import "../App.css";

function Card({ country }) {
  return (
    <div className="card">
      <img className="cardImage" src={country.flag} alt="flag" />
      <div className="cardText">
        <h4 style={{ }}>{country.name}</h4>
        <p style={{ padding: 0, margin: 0, fontSize: "0.7em" }}>
          <b>Population: </b>
          {country.population}
        </p>
        <p style={{ padding: 0, margin: 0, fontSize: "0.7em" }}>
          <b>Region: </b>
          {country.region}
        </p>
        <p style={{ padding: 0, margin: 0, fontSize: "0.7em" }}>
          <b>Capital: </b>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
