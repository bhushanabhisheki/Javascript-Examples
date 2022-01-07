console.log('Data types that can be stored in an Array');

//numbers, string, objects
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray); //[1, 2, 3, 4, 5]

const stringArray = ['this', 'is', 'a', 'test'];
console.log(stringArray); //["this", "is", "a", "test"]

const objectsArray = [{ name: 'mike' }, { name: 'Nike' }];
console.log(objectsArray); //[Object, Object]

//array can be of mix types
const mixArray = [12, 'address', { name: 'mike' }];
console.log(mixArray); //[12, "address", Object]

//array of array
const arrayOfarray = [
  [1, 2],
  [3, 5],
  [5, 6],
];
console.log(arrayOfarray); // [Array[2], Array[2], Array[2]]
