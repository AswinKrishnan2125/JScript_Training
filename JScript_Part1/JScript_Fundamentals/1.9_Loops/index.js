//task 1
{
let i = 3;

while (i) {
  alert( i-- );
}// last value: 1
}

//task 2
{
    let i = 0;
    while (++i < 5) alert( i );//1 2 3 4
}
{
    let i = 0;
    while (i++ < 5) alert( i );// 1 2 3 4 5
}

//task 3
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );

//task4
for(let i=2;i<10;i++){
    if(i%2==0)
        console.log(i);
}

//task 5
{
    let i=0;
    while(i<3){
        alert( `number ${i}!` );
        i++;
    }
}

//task 6
let num=+prompt('Enter a number greater than 100',0);
while(num<100){
    num=+prompt('Enter a number greater than 100','');
}

//task 7
let n=+prompt('Enter a number',0);
for(let i=2;i<=n;i++){
    let flag=0;
    for(let j=2;j<Math.sqrt(i);j++){
        if(i%j==0){
            break;
            flag=1;
        }
    }
    if(flag==0)
        alert(i);
}