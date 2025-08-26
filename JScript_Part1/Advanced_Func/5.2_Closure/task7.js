// "use strict"
let x = 1;

function func() {
    console.log(x); // reference error
    
      let x = 2;
}

func();