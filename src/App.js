import React, { useState } from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";

function App() {
  const [page, setPage] = useState("main");

  function handlePageNavigation(pageName) {
    setPage(pageName);
  }
  return (
    <>
      {page === "main" ? (
        <Main goToPage={handlePageNavigation} />
      ) : page === "info" ? (
        <Info goToPage={handlePageNavigation} />
      ) : (
        "No Page"
      )}
    </>
  );
}

export default App;
