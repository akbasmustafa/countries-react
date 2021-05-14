import React, { useState } from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";

function App() {
  const [page, setPage] = useState("main");
  const [selectedCountry, setSelectedCountry] = useState(null);

  function handlePageNavigation(pageName, param) {
    setSelectedCountry(param);
    setPage(pageName);
  }
  return (
    <>
      {page === "main" ? (
        <Main
          goToPage={handlePageNavigation}
          selectCountry={(country) => selectedCountry(country)}
        />
      ) : page === "info" ? (
        <Info goToPage={handlePageNavigation} country={selectedCountry} />
      ) : (
        "No Page"
      )}
    </>
  );
}

export default App;
