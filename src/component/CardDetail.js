import React from "react";

function CardDetail({ country }) {
  return (
    <div>
      <button>Back</button>
      <div className="row">
        <div className="flag col col-md-6">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="info col col-md-6">
          <h4>{country.name}</h4>
          <div className="row">
            <div className="col col-md-6">
              <p>
                <b>Native Name:</b>
              </p>
              <p>
                <b>Population:</b>
              </p>
              <p>
                <b>Region:</b>
              </p>
              <p>
                <b>Sub Region:</b>
              </p>
              <p>
                <b>Capital:</b>
              </p>
            </div>
            <div className="col col-md-6">
              <p>
                <b>Top Level Domain:</b>
              </p>
              <p>
                <b>Currencies:</b>
              </p>
              <p>
                <b>Languages:</b>
              </p>
            </div>
          </div>
          <p>
            <b>Border Countries:</b>
            <span>First</span>
            <span>Second</span>
            <span>Third</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
