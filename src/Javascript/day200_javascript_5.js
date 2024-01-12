export const javascript5 = () => {
  console.log(
    "------------------Day 200 : Javascript 5 (HTML CSS 1)------------------"
  );
  console.log("1. -----SetTimeout, Events, Event loops, Event delegation-----");

  //a> Settimeout demo - 1,4,3,2 [UNCOMMENT SECTION TO DEMO]
  //   function demo1() {
  //     console.log(1);
  //     setTimeout(() => {
  //       console.log(2);
  //     }, 1000);
  //     setTimeout(() => {
  //       console.log(3);
  //     }, 0);
  //     console.log(4);
  //   }
  //   demo1();

  //NOTES: Event Loop
  //1. Call Stack gets all functions to be executed
  //2. Browser API gets all async functions
  //3. Event Q gets all functions from browser API
  //Call stack once empty will take functions from event Q

  //2.
  var x = 21;
  var girl = function () {
    console.log(x);
    var x = 20;
  };
  girl();
};
