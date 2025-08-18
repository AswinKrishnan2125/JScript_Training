//task 1
let user={};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name;


//task 2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

//task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum=0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);

//task 4
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(let keys in obj){
        if(typeof(obj[keys])=='number'){
            obj[keys]*=2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);