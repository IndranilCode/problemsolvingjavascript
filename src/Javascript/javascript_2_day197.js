export const javascript2 = () => {
  console.log("------- Day 197 : Javascript 2 -------");
  console.log("1. Create and access object");
  var obj1 = {
    a: "10",
    b: "2",
  };

  var obj2 = new Object();

  console.log(obj1.a);
  console.log(obj1["a"]);

  var dog = {
    name: "Bully",
    breed: "Doberman",
    bark: function () {
      console.log("Woof");
    },
    owner: {
      name: "Monika",
      profession: "Coder",
    },
  };

  console.log(dog.bark());
};
