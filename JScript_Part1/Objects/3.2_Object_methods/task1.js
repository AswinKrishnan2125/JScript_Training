function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log('hello');

console.log(user.ref.name);//undefined


