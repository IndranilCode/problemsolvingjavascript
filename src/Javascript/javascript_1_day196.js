export const javascript1 = () => {
  //1. Primitive data types [String, Number, Boolean, Null, Undefined]
  var a = "abc"; //String
  var b = 3; //Number
  var c = false; //Boolean
  var d = null; //Null (No value)
  var e; //Undefined
  var f = undefined; //Undefined

  //1a. TypeOfs
  console.log(
    "1,2. ------Primitive data types [String, Number, Boolean, Null, Undefined] + typeOf-------"
  );
  console.log("a = " + typeof a); //string
  console.log("b = " + typeof b); //number
  console.log("c = " + typeof c); //boolean
  console.log("d = " + typeof d); //object
  console.log("e = " + typeof e); //undefined
  console.log("f = " + typeof f); //undefined
  console.log("typeof(typeof)) = " + typeof typeof f); // typeOf(TypeOf(anything))

  //2. == vs ===
  console.log("3. ------- == vs === -------");
  console.log("1 == 1 : " + (1 == 1)); //true
  console.log("1 === 1 : " + (1 === 1)); //true
  console.log(`'1' == 1 : ` + ("1" == 1)); //true
  console.log(`'1' === 1 : ` + ("1" === 1)); //false

  //3. Explicit conversion
  console.log("4. ------- Explicit conversion -------");
  console.log(+"1"); // String to number
  console.log(`typeof('1') = ` + typeof "1"); //string
  console.log(`typeof(+ '1') = ` + typeof +"1"); //number
  console.log(`+ 'hello' = ` + +"hello"); //NaN
  var a1 = +"hello"; //Evaluates to NaN
  var a2 = +"hi"; //Evaluates to NaN
  console.log(`+ 'hello' === + 'hi' ` + (a1 === a2)); //false NaN != NaN
  console.log(`+ 'hello' === + 'hello' ` + (a1 === a1)); //false NaN != NaN
  console.log(`typeof(+ 'hello') = ` + typeof a1);
  console.log(`3 + '3' = ` + (3 + "3")); //33 string
  console.log(`typeof(3 + '3') = ` + typeof (3 + "3")); //string
  console.log(`3 + 2 + '3' = ` + (3 + 2 + "3")); //53 string
  console.log(`typeof(3 + 2 + '3') = ` + typeof (3 + 2 + "3")); //string
  console.log(`'3' + 2 + 3 = ` + ("3" + 2 + 3)); //323 string

  console.log(1 - "1"); // 0
  console.log(-"24" + 10); //-14

  //4. Object data types [Array]
  console.log("5. ------- Object data types -------");
  //Array internally is stored as an object
  var a2 = [1, 2, 4, "Hello World"];
  console.log(a2);
  console.log(a2[3]);
  //Array can even store functions
  var a3 = [
    1,
    2,
    4,
    "Hello world",
    function () {
      console.log("Hi");
    },
  ];
  console.log("Array stores function => " + a3[4]);

  //6. Assign by value & reference
  console.log("6. ------- Assign by value & reference -------");
  var a4 = [1, 2, 3, "hello"];
  var a5 = a4;
  console.log("Array a5 before change =>" + a5);
  a5[2] = "300";
  console.log(
    "Array a4 (original) after change [By reference - gets updated] =>" + a4
  );

  //Variable copy is by value (primitives are by value)
  var a6 = 2;
  var a7 = a6;
  console.log("Variable a7 before change =>" + a7);
  a7 = 200;
  console.log(
    "Variable a6 (original) after change [By value - remains same] =>" + a6
  );

  //When whole array var is reassigned then the reference itself changes
  var a8 = [1, 2, 3];
  var a9 = a8; //both a8 & a9 are pointing to same location
  console.log("a8 original => " + a8);
  console.log("a9 reference to a8 => " + a9);
  a8 = []; //a8 is not pointing to different memory location
  console.log("Post a8=[], a8 original => " + a8);
  console.log("Post a8=[], a9 reference to a8 => " + a9);
  //Note: memory location that is not reachable is garbage collected

  //7. Playing with arrays
  console.log("7. -------Playing with arrays-------");
  var a10 = [1, 2, 3];
  var a11 = a10;
  console.log("a10 original => " + a10);
  console.log("a11 reference to a10 => " + a11);
  a10.length = 0;
  console.log("Post a10.length = 0, a10 original => " + a10);
  console.log("Post a10.length = 0, a11 reference to a8 => " + a11);

  //8. Comparing null & undefined
  console.log("8. -------Comparing null & undefined-------");
  console.log("null == undefined => " + (null == undefined));
  console.log("null === undefined => " + (null === undefined));

  console.log(`false == "0" => ` + (false == "0"))
  console.log(`false === "0" =>` + (false === "0"))
};
