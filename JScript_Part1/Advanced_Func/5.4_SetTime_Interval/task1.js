function printNumbers(from, to){
    let current = from;
    let time = setInterval(function(){
        console.log(current);
        if(current == to)
            clearInterval(time);
        current++;
    },1000);
    
}

printNumbers(1,5);