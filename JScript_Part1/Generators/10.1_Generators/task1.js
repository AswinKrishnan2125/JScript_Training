function* pseudoRandom(seed){
    let value = seed;
    while(true){
        value = value * 12739  % 2133243233;
        yield value;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073