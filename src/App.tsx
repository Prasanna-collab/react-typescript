import "./App.css";
import { Greets } from "./components/Greets";
import { Person } from "./components/Person";

function App() {
  const personInfo = {
    name: {
      first: "Prasanna",
      last: "Rajendran",
    },
    age: {
      year: 24,
    },
  };
  return (
    <div className="App">
      <Greets name="Prasanna" count={10} isLoggedIn={false} />
      <Person {...personInfo} />
    </div>
  );
}

export default App;
