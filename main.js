
// For Loop Method
// Use Case: Iteration


let names = ['Uche', 'Fu', 'Sam', 'Lily', 'Paul'];


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// For Each
// Use Case: Iteration
// for loop replica
// array.forEach(function(currentValue, index, arr));

names.forEach(name => console.log(name));



// Map
// Loops through each item of the array same as forEach but returns the value of every item in array

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

// Reduce
// Loops through each item of the array and takes two fixed parameters and two optional params, accumulator (index aggregrate) and the val (currently value)
// Where acc is the accumulator and it carries the previous returned sum of numbers
// Val is the current value in the array
// 0 is the initial value set in the function. The accumulator starts from 0 because that the first evaluated value of returned value.
let array = [1,2,3,4,5]; 
 
let result = array.reduce( (acc, val) => {
    console.log('accumulator:', acc);
    console.log('current value:', val);
    return acc + val;
}, 0);


console.log('result:', result);

// Some
// Quite to similar to map function but it doesnt evaluate and return the result of each function in the array. it also doesnt return the result in an array, it returns a value when the conditions are met.

let resultSome = names.some(name => name.length === 4 );

console.log(resultSome);


// Every
// Similar to some but it factors the use of AND rather than OR. so all items in an array must meet the condition to be true or else it becomes.

let matchEvery = names.every(name => name.length === 4)

console.log(matchEvery);

// Array.From
// Takes three parameters, arrayLike an array-like object to convert to an array(convert the first params into an array)
// use map function to call every element in the created array
// A value to use as this when executing the function

let resultFrom = Array.from('abcdefgh'); // First parameters testing changes object to an array

// second parameter testing

resultFrom = Array.from([1,2,3], x => x + x); //  A map function that evaluates every item in the array by addind itself and returning the value in an array.   

console.log(resultFrom);


// Array.of similar to Array constructor (new Array())
// Returns an array of all arguments passed into it

let numbers = Array.of(2,3,3, 'abc' )

console.log(numbers);

// findIndex
// Returns the first index of the value that meets the conditions

let match = names.findIndex(name => name.length === 3)
console.log(match);

// Keys()
// Returns a new Array ITERATOR object that contains keys for each Index of an array

let keys = names.keys()

for (let key of keys) {
    console.log('key:',key)
}

// Array.values()
// returns a new Array object that contains the values for each index in the array.

let values = names.values()

for (let value of values) {
    console.log('value:',value)
}
