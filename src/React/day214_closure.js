export const React1 = () => {
  function serviceMock1(callback) {
    setTimeout(() => {
      let returnValue = 100;
      callback(returnValue);
    }, 2000);
  }

  function client1() {
    serviceMock1(function (result) {
      let val = result;
      console.log(`Return value from service mock => ${val}`);
    });
  }

  client1()
};
