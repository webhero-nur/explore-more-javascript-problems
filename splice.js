const friends = [31, 96, 84, 16, 85, 41, 98, 74, 16, 54, 14, 85, 74, 68];


// Removes elements from an array
// if necessary, insertes new elements in their place
// returning the deleted elements
// will change the original array
const partial = friends.splice(2, 5, 684, 651, 680);
console.log(partial);
console.log(friends);