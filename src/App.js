import logo from "./logo.svg";
import "./App.css";
import { javascript1 } from "./Javascript/javascript_1_day196";
import { javascript2 } from "./Javascript/javascript_2_day197";
import { javascript3 } from "./Javascript/javascript_3_day198";

function App() {
  
  // javascript1();
  // javascript2();
  javascript3();

  return (
    <div className="App">
      <header className="App-header">
        <label>1. Problem Solving Javascript 1 : javascript_1_day196.js</label>
        <br />
        <label>2. Problem Solving Javascript 2 : javascript_2_day197.js</label>
        <br />
        <label>3. Problem Solving Javascript 3 : javascript_3_day198.js</label>
      </header>
    </div>
  );
}

export default App;
