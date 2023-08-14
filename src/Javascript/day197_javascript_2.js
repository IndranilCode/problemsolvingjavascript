export const javascript2 = () => {
  console.log("------------------Day 197 : Javascript 2------------------");
  console.log("1. -----Create and access object-----");
  //a. Ways to create object
  var obj1 = {
    a: "10",
    b: "2",
  };
  var obj2 = new Object();

  console.log(`   obj1.a : ` + obj1.a);
  console.log(`   obj1["a"] : ` + obj1["a"]);

  //b. Nested objects + object with functions
  console.log("b> Nested objects + object with functions");
  var dog = {
    name: "Bully",
    breed: "Doberman",
    bark: function (tone) {
      console.log("   dog.bark called : Woof " + tone);
    },
    owner: {
      name: "Monika",
      profession: "Coder",
    },
  };
  console.log(`   dog.name : ` + dog.name);
  dog.bark("bow wow");

  //c. Class example (Interview question)
  var a = {},
    b = { key: "b" },
    c = { key: "c" };

  a[b] = 123; //b gets stringified to [object Object]
  a[c] = 456; //c gets stringified to [object Object]
  console.log(`   a[b] : ` + a[b]); //456

  console.log("2. -----Functions--------------------");
  // Note: Function with no returns, return undefined
  // Function decleration & function expression
  function fooDecleration() {
    console.log("foo - function decleration");
  }

  var fooExpression = function () {
    console.log("foo - function expression");
  };

  //In JS you can return a function,
  // You can pass a function as parameter

  //a. Function returning function
  console.log("a> Function returning function");
  function abc() {
    return function () {
      console.log("   returning function");
    };
  }

  console.log(`   Print return function body : abc() => ` + abc()); //Prints returning function body
  abc()(); // Returning function called

  //b. Pass function as parameter
  console.log("b> Pass function as parameter");
  function outer(fn) {
    fn();
  }

  var inner = function () {
    console.log("   inner function - print");
  };
  outer(inner);

  console.log("3. -----Passing multiple arguments-------");
  //a. Passing many arguments and capturing as single argument
  //arguments.push is not allowed (arguments is not an array)
  function argument_demo() {
    console.log(arguments); //prints all arguments
    console.log(arguments.length); //6
    // arguments.push(8) //Not allowed as arguments is not array
  }
  argument_demo(1, 2, 3, 4, 5, "hello");

  //b. Hoisting - all variable declerations are hoisted at top
  //Hoisting - 1
  function foo() {
    console.log(`   d_var : ` + d_var); // Error: d_var is not defined (if d_var is not defined anywhere globally)
    //if defined d_var even after the function it is printed : 20
  }
  var d_var = 20; // d_var will be hoisted at top
  foo();

  //Hoisting - 2
  var a3 = 2000;
  function foo_a3() {
    console.log(`   a3 = ` + a3); //Undefined
    var a3 = 3000;
  }
  foo_a3();

  //Hoisting - 3
  var a3_1 = 2000;
  function foo_a3_1() {
    console.log(`   a3_1 = ` + a3_1); //3000 
  }
  var a3_1 = 3000;
  foo_a3_1();

  console.log("4. -----Array of complex objects-------");
  var obj_4 = []
  var obj_4_1 = new Array(0);

  //5. Constructor
  console.log("5. -----Constructor--------------------");
  //Example 1
  function Dog (name, breed) {
    this.name = name
    this.breed = breed
  }

  var d1 = new Dog("Pluto", "Pom")
  console.log(d1)
};
