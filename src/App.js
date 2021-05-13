import "./App.css";
import countriesAll from "./countriesAll.json";
import Card from "./component/Card";

function App() {
  return (
    <div className="App container">
      <div className="mainContainer row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {countriesAll.map((country, index) => {
          return <Card key={index} country={country} />;
        })}
      </div>
    </div>
  );
}

export default App;
