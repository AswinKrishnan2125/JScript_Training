function topSalaries(salaries){
    let sal=0,maxName=null;
    for(let [key,value] of Object.entries(salaries)){
        if(sal < value){
            sal = value;
            maxName = key;
        }
    }
    return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalaries(salaries));
