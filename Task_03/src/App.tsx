import { cities } from "./constants/City";
import CitiesRegister from "./context/citiesRegister";
import Home from "./pages/Home";


function App() {
  
  return (
    <div className="App">
      <CitiesRegister.Provider value={cities}>
        <Home/>
      </CitiesRegister.Provider>
    </div>
  );
}

export default App;
