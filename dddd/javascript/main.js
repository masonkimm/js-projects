const newList = ['one', 'two', 'three'];

localStorage.setItem('newList', newList);

const savedList = localStorage.getItem('newList');
console.log(savedList);

//////////////////////

const newDay = { monday: 'golf', tuesday: 'tennis' };

localStorage.setItem('newDay', JSON.stringify(newDay));

// const savedDay = localStorage.getItem('newDay');
const savedDay = JSON.parse(localStorage.getItem('newDay'));
console.log(savedDay);
console.log(savedDay.monday);
console.log(savedDay.tuesday);
