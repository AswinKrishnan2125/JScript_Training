function readNumber(){
    let num;
    do{
        num = prompt('Enter a num','');
    }while(!isFinite(num));
    if(num === null || num==='') return null;

    return +num;
}
alert(readNumber());