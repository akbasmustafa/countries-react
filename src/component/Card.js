import React from "react";
import "../App.css";

function Card({ country, onclick }) {
  return (
    <div className="col" onClick={() => onclick()}>
      <div className="card h-100">
        <img className="cardImage card-img-top" src={country.flag} alt="flag" />
        <div className="cardText card-body">
          <h4 className="card-title">{country.name}</h4>
          <p
            className="card-text"
            style={{ padding: 0, margin: 0, fontSize: "0.7em" }}
          >
            <b>Population: </b>
            {country.population}
          </p>
          <p
            className="card-text"
            style={{ padding: 0, margin: 0, fontSize: "0.7em" }}
          >
            <b>Region: </b>
            {country.region}
          </p>
          <p
            className="card-text"
            style={{ padding: 0, margin: 0, fontSize: "0.7em" }}
          >
            <b>Capital: </b>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
