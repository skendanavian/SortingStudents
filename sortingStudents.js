//Simple Sorting Exercise

const array = [10, 2, 5, 1, 9];

// sort lowest to highest
let sorted = array.sort((a, b) => a - b);
console.log(sorted);




//SORT THROUGH ARRAY OF OBJECTS
//RE-ORDER THE OBJECTS ALPHABETICALLY BASED ON FIRST NAME
//IF TWO NAMES ARE THE SAME - THE OLDEST AGE WILL BE FIRST


const sortByNameKey = function(key1, key2) {

  let name1 = key1.name.toLowerCase();
  let name2 = key2.name.toLowerCase();

  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  } else {
    return sortByAgeKey(key1, key2);
  }
  
};

const sortByAgeKey = function(key1, key2) {
  if (key1.age >= key2.age) {
    return -1;
  } else {
    return 1;
  }
};

const alphabetizeArray = function(array) {
  let sorted = array.sort((a, b) => sortByNameKey(a, b));
  return sorted;

};



//TESTING
const eqArrays = function(array1, array2) {
  let arrayCheck = true;

  if (array1.length !== array2.length) {
    arrayCheck = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        arrayCheck = false;
      }
    }
  }
  return arrayCheck;
};

const assertArraysEqual = function(inputArray1, inputArray2) {
  let trueCounter = 0;
  if (inputArray1.length === inputArray2.length) {
    for (const e in inputArray1) {
      if (eqObjects(inputArray1[e], inputArray2[e])) {
        trueCounter += 1;
      }
    }
  }
  if (trueCounter === inputArray1.length) {
    console.log("✅ ✅ ✅ Assertion Passed: The arrays are identical.");
  } else {
    console.log("❌❌❌ Assertion failed: The arrays are not identical.");
  }
};


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const e of keys1) {
    if (Array.isArray(object1[e]) && Array.isArray(object2[e])) {
      console.log("we are arrays");
      if (!eqArrays(object1[e], object2[e])) {
        return false;
      }
    } else if (object1[e] !== object2[e]) {
      return false;
    }
  }
  return true;
};


//TEST CASES
const students = [
  {id: 1, name: "bruce", age: 40},
  {id: 2, name: "zoidberg", age: 22},
  {id: 3, name: "alex", age: 22},
  {id: 4, name: "alex", age: 30}
];
const students1 = [
  {id: 1, name: "Mike", age: 40},
  {id: 2, name: "Carl", age: 22},
  {id: 3, name: "Jim", age: 21},
  {id: 4, name: "Carl", age: 21}
];
const students2 = [
  {id: 1, name: "Mike", age: 20},
  {id: 2, name: "Mike", age: 22},
  {id: 3, name: "Mike", age: 22},
  {id: 4, name: "Mike", age: 47}
];
const students3 = [
  {id: 1, name: "Mike", age: 20},
  {id: 2, name: "Jim", age: 22},
  {id: 3, name: "Mike", age: 22},
  {id: 4, name: "Sam", age: 47}
];


//CALLING TESTS

assertArraysEqual(alphabetizeArray(students), [{id: 4, name: 'alex', age: 30},
  {id: 3, name: 'alex', age: 22},
  {id: 1, name: 'bruce', age: 40},
  {id: 2, name: 'zoidberg', age: 22}]); // Should return true

assertArraysEqual(alphabetizeArray(students1), [{id: 2, name: 'Carl', age: 22},
  {id: 4, name: 'Carl', age: 21},
  {id: 3, name: 'Jim', age: 21},
  {id: 1, name: 'Mike', age: 40}]); // Should return true

assertArraysEqual(alphabetizeArray(students2), [{id: 4, name: 'Mike', age: 47},
  {id: 2, name: 'Mike', age: 22},
  {id: 3, name: 'Mike', age: 22},
  {id: 1, name: 'Mike', age: 20}]); // should return true

assertArraysEqual(alphabetizeArray(students3), [{id: 4, name: 'Mike', age: 47},
  {id: 2, name: 'Mike', age: 22},
  {id: 3, name: 'Mike', age: 22},
  {id: 1, name: 'Mike', age: 20}]); // should return false


