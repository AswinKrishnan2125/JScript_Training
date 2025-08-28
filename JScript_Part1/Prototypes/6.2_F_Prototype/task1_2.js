function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;
// Rabbit.prototype.name = "aswin";

console.log( rabbit.name ); //false