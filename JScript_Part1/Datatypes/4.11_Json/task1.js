let user = {
  name: "John Smith",
  age: 35
};

user = JSON.stringify(user);
console.log(user);

let newUser = JSON.parse(user);
console.log(newUser);

