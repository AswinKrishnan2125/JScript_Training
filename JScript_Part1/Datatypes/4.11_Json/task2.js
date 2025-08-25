let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
room.num=52;
meetup.self = meetup;
// console.log(meetup);


alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key!=='' && value==meetup) ? undefined : value;
}));
