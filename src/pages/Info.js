import React from "react";
import CardDetail from "../component/CardDetail";

function Info({ country, goToPage }) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-light m-3"
        onClick={() => goToPage("main")}
      >
        +Back
      </button>
      <CardDetail country={country} goToPage={goToPage} />
    </div>
  );
}

export default Info;
