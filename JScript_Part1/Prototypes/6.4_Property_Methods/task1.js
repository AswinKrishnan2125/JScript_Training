let dictionary = Object.create(null, {
  toString: { // define toString property
    value() { // the value is a function
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";


for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
alert(dictionary); 