function sumSalaries(salaries){
    let result = 0;
    for(let val of Object.values(salaries)){
        result+=val;
    }
    return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(sumSalaries(salaries));
