function count(obj){
    let count=0;
    for(let ob of Object.entries(obj))
        count++;
    return count;
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user));
