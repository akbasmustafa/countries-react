import "./App.css";
import countriesAll from "./countriesAll.json";
import Card from "./component/Card";

function App() {
  return (
    <div className="App ">
      <div className="mainContainer">
        {countriesAll.map((country, index) => {
          return <Card key={index} country={country} />;
        })}
      </div>
    </div>
  );
}

export default App;
