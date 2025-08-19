//task1
alert(null || 2 || undefined) //2

//task2
alert( alert(1) || 2 || alert(3) );// 1 then 2

//task3
 alert(1 && null && 2); //null

 //task4
 alert(alert(1) && alert(2));// 1 then undefined

 //task5
 alert(null || 2 && 3 || 4) //3

 //task6
 let age=+prompt('Enter your age','');
 if(age>=14 && age<=90)
        alert('valid');

 //task 6.1
if(!(age>=14 && age<=90))
        alert('valid');

//task 6.2
if(age<14 || age>90)
    alert('valid');

//task 7
if (-1 || 0) alert( 'first' );//-1 first
if (-1 && 0) alert( 'second' );//0 
if (null || -1 && 1) alert( 'third' );//1 third

//task8
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}