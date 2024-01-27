export const javascript4 = () => {
  console.log("------------------Day 199 : Javascript 4------------------");

  //1. Proto/Prototype Recap
  console.log("1. -----Proto/Prototype Recap + Closure-----");

  //a> Recap Example 1 - Closure
  //NOTE: 3 types of scope
  //1. Global
  //2. Local
  //3. Closure - retaining scope of a variable, even after function has returned
  console.log("a> Recap Example 1 - Closure");
  function makeWorker() {
    var name = "Pete"; //name - here its local scope
    return function () {
      console.log(name); //name - is a closure scope
    };
  }

  var name = "John";
  var work = makeWorker(); //This function helps return name = Pete, even when name=John in previous line [Functional prog nature has caused closure]
  work();
  //NOTE: What is functional programming nature of JS ?
  //1. Returning a function
  //2. Pass a function

  //b> Recap Example 2 - Closure
  console.log("b> Recap Example 2 - Closure");
  function makeCounter() {
    var count = 0; //Local scope
    return function () {
      return count++; //Closure scope
    };
  }

  var c1 = makeCounter();
  var c2 = makeCounter();
  console.log(c1()); //0
  console.log(c1()); //1
  console.log(c1()); //2
  console.log(c1()); //3

  console.log(c2()); //0
  console.log(c2()); //1
  console.log(c2()); //2
  console.log(c2()); //3

  //c> Recap Example 3 - Closure
  console.log("c> Recap Example 3 - Closure");
  function init() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    name = "Chrome";
    return displayName;
  }

  var c3 = init();
  c3(); // prints Chrome

  //2. IIFE - Immediately invoked function expression
  console.log("2. -----IIFE - Immediately invoked function expression-----");
  //IIFE - isnt attached to wondow scope
  //Unlike normal vars/functions declared they are internally attached to wondow scope and pollute the window environment

  (function () {
    console.log("   Called from IIFE");
  })();

  //3. Currying
  console.log("3. ----------Currying----------");
  console.log('a> Currying Example 1 - Sum()() ')
  //Sum(1, 2) = 3
  //How to achieve Sum(1)(2) = 3 ?
  //Currying happens because of closure

  function sum(a) {
    if (arguments.length > 1) {
        return arguments[0] + arguments[1]
    }
    return function(b) {
        return a + b;
    }
  }
  console.log(`    sum(1, 2) : ` + sum(1, 2))
  console.log(`    sum(1)(2) : ` + sum(1)(2))

  console.log('b> Currying Example 2 - Real life example ')

  //5. ES6
  console.log("5. ----------ES6--------------");
  //a> Let vs Var

  //Var redecleration - ALLOWED
  var a5 = 10
  var a5 = 12 //var redecleration is allowed
  console.log(`    var redeclared - a5 : ` + a5)

  //Let redecleration - NOT ALLOWED
  let a5_1 = 10
  // let a5_1 = 11 //Identifier 'a5_1' has already been declared
  console.log(`    let redecleration - not allowed`)

  //Var & let interchanged redecleration - NOT ALLOWED
  var a5_2 = 10
  // let a5_2 = 11 //ERROR: Identifier 'a5_2' has already been declared
  console.log(`    var then let redecleration - not allowed`)
  
  //Let & var interchanged redecleration - NOT ALLOWED
  let a5_3 = 10
  // var a5_3 = 11 //Identifier 'a5_3' has already been declared
  console.log(`    let then var redecleration - not allowed`)

  //Const cannot be reassigned
  const a5_4 = 10
  // a5_4 = 11 //ERROR: Assignment to constant variable

  //Var = global scope, Let = block scope

  //Let block scope
  let a5_6 = 10
  if (true) { //Block scope
    let a5_6 = 11
    console.log(`    a5_6 (inside) : ` + a5_6) //11 printed here
  }
  // let a5_6 = 12 // NOT ALLOWED (reassigning let)
  console.log(`    a5_6 (outside) : ` + a5_6) //10 printed here

  //Const block scope
  const a5_7 = 10
  if (true) { //Block scope
    let a5_7 = 11
    console.log(`    a5_7 (inside) : ` + a5_7) //11 printed here
  }
  // a5_7 = 12 // NOT ALLOWED (Assignment to constant variable)
  console.log(`    a5_7 (outside) : ` + a5_7) //11 printed here

  //NOTE: Hoisting happens both in let & var - Not in const

  //b> Arrow function
  var multiply = (a, b) => a * b;
  console.log(`    Arrow function multiply(3, 4) : ` + multiply(3, 4))
  //NOTE: Arrow functions cant be used as constructor function

  //c> Spread operator
  let a5c1 = [1, 2, 3, 4, 5]
  let a5c2 = a5c1 //This is reference - change in either affects other
  let a5c3 = [...a5c1] //This is a copy
  a5c1.length = 2
  console.log(`    a5c3 (copy) : ` + a5c3)
  console.log(`    a5c1 (orig) : ` + a5c1)

  //Spread operator on object
  let obj1 = {
    k : 1,
    v : 2
  }
  let obj2 = {...obj1}
  console.log(obj2)

};
