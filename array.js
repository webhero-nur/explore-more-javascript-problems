const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [36, 54, 96, 84, 16, 84, 16, 84, 85, 68, 41, 85, 68, 42];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));        // check array using Array.isArray
console.log(typeof add);
console.log(friends.includes(19));          // easiest way to check presence of element using includes
console.log(friends.includes(16));

console.log(friends.indexOf(19) !== -1);    // another way to check presence of element using indexOf

// concat:
const newFriendsAge = [65, 16, 51, 69, 67];
const allFriends = newFriendsAge.concat(friends);   // join 2 array to make a mega array
console.log(allFriends);