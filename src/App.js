import logo from "./logo.svg";
import "./App.css";
import { javascript1 } from "./Javascript/day196_javascript_1";
import { javascript2 } from "./Javascript/day197_javascript_2";
import { hoisting_demo } from "./Javascript/day197_hoisting_demo";
import { javascript3 } from "./Javascript/day198_javascript_3";
import { javascript4 } from "./Javascript/day199_javascript_4";
import { javascript5 } from "./Javascript/day200_javascript_5";

function App() {
  javascript1();
  // javascript2();
  // hoisting_demo();
  // javascript3();
  // javascript4();
  // javascript5()

  return (
    <div className="App">
      <header className="App-header">
        <label>
          1. Problem Solving Javascript - 1 : javascript_1_day196.js (26th May
          2023) / Day 201
        </label>
        <br />
        <label>
          2. Problem Solving Javascript - 2 : javascript_2_day197.js (29th May
          2023)
        </label>
        <br />
        <label>2a. hoisting_demo.js (29th May 2023)</label>
        <br />
        <label>
          3. Problem Solving Javascript - 3 : javascript_3_day198.js (31st May
          2023)
        </label>
        <br />
        <label>
          4. Problem Solving Javascript - 4 : javascript_4_day199.js (2nd June
          2023)
        </label>
        <br />
        <label>
          4. Problem Solving HTML, CSS (JS Contd) - 1 : javascript_5_day200.js
          (5th June 2023)
        </label>
      </header>
    </div>
  );
}

export default App;
