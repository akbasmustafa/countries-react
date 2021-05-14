import React from "react";

function Info({ country,  goToPage }) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => goToPage("main")}
      >
        Back to Main
      </button>
      <h4>{country.name}</h4>
    </div>
  );
}

export default Info;
