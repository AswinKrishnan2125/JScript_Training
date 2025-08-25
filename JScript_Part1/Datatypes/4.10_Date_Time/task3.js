function getLocaDay(date){
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA','SU'];
    return days[date.getDay()+1];
}

let date = new Date(2012, 0, 3);
console.log(getLocaDay(date));
