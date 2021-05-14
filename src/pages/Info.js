import React from "react";

function Info({ goToPage }) {
  return (
    <div>
      <button onClick={() => goToPage("main")}>Back to Main</button>
      <h4>Info Page</h4>
    </div>
  );
}

export default Info;
