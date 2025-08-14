//task 1
if ("0") {
  alert( 'Hello' );// will alert
}

//task2
let name=prompt("What is the official name of JavaScript",'');
if(name=="ECMAScript")
    alert('Right!');
else
    alert("You dont know? ECMAScript!");

//task3
let value=+prompt('Enter a number','');
if(value>0)
    alert(1);
else if(value<0)
    alert(-1);
else
    alert(0);

//task 4
let result,a=5,b=3;
result=(a+b)<4 ? 'Below': 'Over';
alert(result);

//task 5
let message,login='';
message=(login=='Employee') ? 'Hello': (login=='Director') ?
            'greetings' : (login=='') ? 'No login': '';
alert(message);