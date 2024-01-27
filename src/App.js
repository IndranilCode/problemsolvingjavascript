import logo from "./logo.svg";
import "./App.css";
import { javascript1 } from "./Javascript/day201_javascript_1";
import { javascript2 } from "./Javascript/day202_javascript_2";
import { hoisting_demo } from "./Javascript/day202_hoisting_demo";
import { javascript3 } from "./Javascript/day203_javascript_3";
import { javascript4 } from "./Javascript/day204_javascript_4";
import { javascript5 } from "./Javascript/day200_javascript_5";

import { React1 } from "./React/day214_closure";

function App() {
  // javascript1();
  // javascript2();
  // hoisting_demo();
  // javascript3();
  javascript4();
  // javascript5()
  React1()


  return (
    <div className="App">
      <header className="App-header">
        <label>
          1. (Day 201) Problem Solving Javascript - 1 : day201_javascript_1.js (26th May
          2023)
        </label>
        <br />
        <label>
          2. (Day 202) Problem Solving Javascript - 2 : day202_javascript_2.js (29th May
          2023)
        </label>
        <br />
        <label>2a. (Day 202) hoisting_demo.js (29th May 2023)</label>
        <br />
        <label>
          3. (Day 203) Problem Solving Javascript - 3 : day203_javascript_3 (31st May
          2023)
        </label>
        <br />
        <label>
          4. (Day 204) Problem Solving Javascript - 4 : day204_javascript_4.js (2nd June
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
