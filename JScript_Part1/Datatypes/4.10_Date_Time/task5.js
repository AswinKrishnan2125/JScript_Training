function getLastDayOfMonth(year, month){
    const date= new Date(year,month,1);
    date.setMonth(month+1);
    date.setDate(date.getDate()-1);
    console.log(date.toString());
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
