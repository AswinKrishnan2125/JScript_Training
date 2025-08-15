//task 1.1
function checkAge(age) {
  return (age > 18) ?  true:  confirm('Did parents allow you?');
  
}

//task 1.2
function checkAge(age) {
  return (age > 18) ||  confirm('Did parents allow you?');
  
}

//task 2
function min(a,b){
    return Math.min(a,b);
}

//task 3
function pow(x,n){
    let ans=x;
    while(n>1){
        ans*=x;
        n--;
    }
    return ans;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}