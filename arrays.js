//ways to create an array
const numbers = [1, 2, 3]; //[1, 2, 3]
console.log(numbers);

const arrayWithSize = new Array(2);
//passing single arg creates array of that arrayWithSize if numeric
//[undefined, undefined]
// if arg -ve then Error: Invalid array length
console.log(arrayWithSize);

const moreNumbers = new Array(1, 2); //[1, 2]
console.log(moreNumbers); 

const arrayWithoutNew = Array(4);
console.log(arrayWithoutNew); //[undefined, undefined, undefined, undefined]

const anotherArrayWithoutNew = Array(6, 7, 8); //[6, 7, 8]
console.log(anotherArrayWithoutNew);

const arrayUsingArrayOf = Array.of(1); //[1]  //treated as element
console.log(arrayUsingArrayOf); //performance issue using Array.of

const arrayUsingArrayOf1 = Array.of(1, 2); //[1, 2]
console.log(arrayUsingArrayOf1); //performance issue using Array.of
