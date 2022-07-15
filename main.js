
// For Loop Method
// Use Case: Iteration


let names = ['Uche', 'Fu', 'Sam', 'Lily', 'Paul'];


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// For Each
// Use Case: Iteration
// for loop replica

names.forEach(name => console.log(name));



// Map
// Loops through each item of the array same as forEach but returns the value of every the loop item in array

let isNameEqualThree = names.map(name => name.length === 3 ? name : false);
console.log(isNameEqualThree);

// Filter
// Loops through each item of the array same as forEach but returns only the truthy value in an array
let fullName = names.filter(name => name.length === 3 ? name : false);
console.log(fullName);

// Find
// / Loops through each item of the array same as forEach but the returns only the first match value and returns undefined if no match

let findOne =  names.find(name => name.length === 3);
console.log(findOne);