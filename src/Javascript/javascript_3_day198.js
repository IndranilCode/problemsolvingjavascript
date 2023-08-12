export const javascript3 = () => {
    console.log("------------------Day 198 : Javascript 3------------------");

    //1. Call Apply Bind
    console.log("1. -----Call apply bind-----");
    //Notes:
    // this : current object instance
    // Is there a way we can change this (the calling instance)

    var pokemon = {
        firstName : 'Poke',
        lastName: 'Mon',
        getPokeName: function() {
            var fullName = this.firstName + ' ' + this.lastName
            return fullName
        }
    }

    var pokemonName = function (a, b) {
        // console.log(this)
        console.log(this.getPokeName() + ' loves ' + a + ' & ' + b)
    }

    //a> Call
    // pokemonName('Jilipi', 'Bun') //Cannot read properties of undefined (Wont work - inside pokemonName, the this.getPokeName , this isn't pokemon)
    pokemonName.call(pokemon, 'Jilipi', 'Call') // .call is available in all methods to pass the object as 1st parameter

    //b> Apply
    pokemonName.apply(pokemon, ['Jilipi2', 'Apply']) // .apply is available in all methods to pass the object as 1st parameter, 2nd param all array

    //c> Bind
    var p1 = pokemonName.bind(pokemon)
    p1('Jilipi', 'Bind') //Poke Mon loves Jilipi & Bind
    p1('Jilipi', 'Bind2') //Poke Mon loves Jilipi & Bind2

    var p2 = pokemonName.bind(pokemon, 'Sandesh')
    p2() //Poke Mon loves Sandesh & undefined
    p2('Bind3') //Poke Mon loves Sandesh & Bind3

    //Example
    var monica = {
        name : "Monica",
        total: 400,
        deductFee : function(fee) {
            this.total = this.total - fee
            return this.name + ' , Balance = ' + this.total
        }
    }
    var rachel = {
        name : "Rachel",
        total: 1500,
    }

    //Attempt 1
    var r1 = monica.deductFee.bind(rachel)
    r1(100) //Not working - no console.log in function
    console.log(r1(100)) //Works fine

    //Math.max - app params v/s array (apply)
    //Math.max takes params but not array. How to make it work ?
    console.log(`Math.max(1, 2, 3, 4, 5) = ` + Math.max(1, 2, 3, 4, 5))
    console.log(`Math.max.apply(null, [1, 2, 3, 4, 5]) = ` + Math.max.apply(null, [1, 2, 3, 4, 5])) //1st param - either null, this, window, <any number>


    //2. Slicing Arrays
    console.log("2. -----Slicing arrays-----");
    //a> Slice - doesn't modify the main array - works with a copy
    let a2 = [1, 2, 3, 4, 5, 6]
    console.log(`a2.slice() : ` + a2.slice()) //Full array - no change
    console.log(`a2.slice(2) : ` + a2.slice(2)) //Slices 1st 2 elements
    console.log(`a2.slice(2, 4) : ` + a2.slice(2, 4)) //Slices from 2-4 index
    console.log(`a2 : ` + a2)

    //b> Using slice() to play with "arguments"
    let argumentPlay = function() {
        console.log(arguments)
        // arguments.push('another') //arguments.push is not allowed
        
        var b2 = Array.prototype.slice.call(arguments) //Way to make arguments like an array
        b2.push('Peter cat')
        console.log(b2)
    }
    argumentPlay(1, 2, 'Dadaboudi biriyani')


    //3. Proto
    console.log("3. -----Proto---------------");
    var a3 = {
        x: 10,
        calculate : function(z) {
            return this.x + this.y + z
        }
    }
    var b3 = {
        y: 20,
        __proto__: a3 //b3 is inheriting from a3
    }
    console.log(`b3.calculate(2) : ` + b3.calculate(2)) //32
    console.log(`b3.y :` + b3.y) // 20

    //4. Prototype
    console.log("4. -----Prototype-----------");
    console.log(String.prototype)
    console.log(Object.prototype)
    console.log(Array.prototype)

    function Foo(y) {
        this.y = y
    }
    Foo.prototype.x = 100
    Foo.prototype.calculate = function(z) {
        return this.x + this.y + z
    }
    var a4 = new Foo(10)
    console.log(a4.calculate(2)) //112


  };
  