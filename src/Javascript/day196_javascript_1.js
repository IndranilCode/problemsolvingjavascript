import { type } from "@testing-library/user-event/dist/type";

export const javascript1 = () => {
  console.log("------------------Day 196/201 : Javascript 1------------------");
  //1. Primitive data types [String, Number, Boolean, Null, Undefined]
  var a = "abc"; //String
  var b = 3; //Number
  var c = false; //Boolean
  var d = null; //Null (No value)
  var e; //Undefined
  var f = undefined; //Undefined (Usually not done)

  //NOTE: Javascript is a dynamically (loosely) typed language
  //1a. TypeOfs
  console.log(
    "1,2. ------Primitive data types [String, Number, Boolean, Null, Undefined] + typeOf-------"
  );
  console.log("   [a = 'abc']         ; typeof(a) = " + typeof a); //string
  console.log("   [var b = 3]         ; typeof(b) = " + typeof b); //number
  console.log("   [var c = false]     ; typeof(c) = " + typeof c); //boolean
  console.log("   [var d = null]      ; typeof(d) = " + typeof d); //object - null is primitive data type signifying null value - hence object
  console.log("   [var e]             ; typeof(e) = " + typeof e); //undefined
  console.log("   [var f = undefined] ; typeof(f) = " + typeof f); //undefined
  console.log("   typeof(typeof(<anything>))) = " + typeof typeof f); // typeOf(TypeOf(anything))

  //3. == vs ===
  console.log("3. ------- == vs === -------");
  console.log("   1 == 1 : " + (1 == 1)); //true
  console.log("   1 === 1 : " + (1 === 1)); //true
  console.log(`   '1' == 1 : ` + ("1" == 1)); //true
  console.log(`   '1' === 1 : ` + ("1" === 1)); //false

  //4. Explicit conversion
  console.log("4. ------- Explicit conversion -------");
  console.log("   typeOf('1')  : " + typeof "1"); //String
  console.log("   typeOf(+ '1') : " + typeof +"1"); //String to number conversion [+ '']
  console.log(`   + 'hello' : ` + +"hello"); //NaN
  var a4 = +"hello"; //Evaluates to NaN
  var b4 = +"hi"; //Evaluates to NaN
  console.log(`   + 'hello' == + 'hi' : ` + (a4 == b4)); //false NaN != NaN
  console.log(`   + 'hello' === + 'hi' : ` + (a4 === b4)); //false NaN != NaN
  console.log(`   + 'hello' === + 'hello' : ` + (a4 === a4)); //false NaN != NaN
  console.log(`   typeof(+ 'hello') : ` + typeof a4); //Type = number (Infinity is a number)

  console.log(`   3 + '3' = ` + (3 + "3")); //33 string
  console.log(`   typeof(3 + '3') : ` + typeof (3 + "3")); //string
  console.log(`   3 + 2 + '3' = ` + (3 + 2 + "3")); //53 string
  console.log(`   typeof(3 + 2 + '3') = ` + typeof (3 + 2 + "3")); //string
  console.log(`   '3' + 2 + 3 = ` + ("3" + 2 + 3)); //323 string
  console.log(`   1 - "1" = ` + (1 - "1")); // 0 ( - operator converts string to number)
  console.log(`   -"24" + 10 = ` + (-"24" + 10)); //-14
  console.log(`   +"hello" + "world" = ` + (+"hello" + "world")); //NaNworld

  //5. Object data types [Array]
  console.log("5. ------- Object data types -------");
  //Array internally is stored as an object
  var a5 = [1, 2, 4, "Hello World"];
  console.log(`   [1, 2, 4, "Hello World"] : ` + a5);
  console.log(`   a5[3] : ` + a5[3]);
  //Array can even store functions
  var b5 = [
    1,
    2,
    4,
    "Hello world",
    function () {
      console.log("Hi");
    },
  ];
  console.log("   Array stores function => " + b5[4]);

  //6. Assign by value & reference
  console.log("6. ------- Assign by value & reference -------");
  var a6 = [1, 2, 3, "hello"];
  var b6 = a6;
  console.log("   Array a6 before change =>" + a6);
  b6[2] = "300";
  console.log(
    "   Array a6 (original) after change [By reference - gets updated] =>" + a6
  );

  //Variable copy is by value (primitives are by value)
  var c6 = 2;
  var d6 = c6;
  console.log("   Variable c6 before change =>" + c6);
  d6 = 200;
  console.log(
    "   Variable c6 (original) after change [By value - remains same] =>" + c6
  );

  //When whole array var is reassigned then the reference itself changes
  var a8 = [1, 2, 3];
  var a9 = a8; //both a8 & a9 are pointing to same location
  console.log("   a8 original => " + a8);
  console.log("   a9 reference to a8 => " + a9);
  a8 = []; //a8 is not pointing to different memory location
  console.log("   Post a8=[], a8 original => " + a8);
  console.log("   Post a8=[], a9 reference to a8 => " + a9);
  //Note: memory location that is not reachable is garbage collected

  //7. Playing with arrays
  console.log("7. -------Playing with arrays-------");
  var a10 = [1, 2, 3];
  var a11 = a10;
  console.log("   a10 original => " + a10); // 1,2,3
  console.log("   a11 reference to a10 => " + a11); // 1,2,3
  a10.length = 0;
  console.log("   Post a10.length = 0, a10 original => " + a10); //[]
  console.log("   Post a10.length = 0, a11 reference to a10 => " + a11); //[]

  //8. Comparing null & undefined
  console.log("8. -------Comparing null & undefined-------");
  console.log("   null == undefined => " + (null == undefined)); //true
  console.log("   null === undefined => " + (null === undefined));
  console.log(`   false == "0" => ` + (false == "0"));
  console.log(`   false === "0" =>` + (false === "0"));
};
