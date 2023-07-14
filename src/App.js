import logo from "./logo.svg";
import "./App.css";
import { javascript1 } from "./Javascript/javascript_1_day196";
import { javascript2 } from "./Javascript/javascript_2_day197";

function App() {
  console.log("---------Javascript 1 (Day 196)---------");
  // javascript1();
  javascript2();

  return (
    <div className="App">
      <header className="App-header">
        <label>1. Problem Solving Javascript 1 : javascript_1_day196.js</label>
        <br />
        <label>2. Problem Solving Javascript 2 : javascript_2_day197.js</label>
      </header>
    </div>
  );
}

export default App;
