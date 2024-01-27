export const hoisting_demo = () => {
  console.log("------------------Day 197/202 : Javascript 2------------------");
  var d = 12;
  var e = 14;

  function demo1() {
    console.log("1. ----------Hoisting Demo----------");

    //1. a - not defined anywhere
    // console.log(a) //ReferenceError: a is not defined [if not defined anywhere]

    //2. b - defined before demo1() call ; c - defined after demo1()
    console.log("  b = ", b); //10
    console.log("  c = ", c); //undefined

    //3. d - overridden in local over global
    var d = 13;
    console.log("  d = ", d, "(d : overriden in local > global)"); //13

    //4. e - overridden in local over global BUT after access
    console.log("  e = ", e, "(e : overriden in local > global after access)"); //undefined
    var e = 15;
  }

  var b = 10;
  demo1();
  var c = 11;
};
