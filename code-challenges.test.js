// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe('adjustedArray', () => {

    const colors1 = ["yellow", "blue", "pink", "green"]

    it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {

      expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.adjustedArray(expected));
    });

    it('does not match if received does not contain expected elements', () => {
      expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).not.toEqual(expect.adjustedArray(expected));

    });
  });


// YError: Invalid second argument. Expected string but received function.
// cant seem to get the yarn jest to read the test. 
// error with a paragraph of yelllow text.



// b) Create the function that makes the test pass.
            

// create a function
// have function remove first item
// have function shuffle remaining items
// I don't know the correct syntax to connect all of these things but I think these are the right functions
            

const adjustedArray = (colors1, colors2) => {
    function colors1.shift()
    function colors2.shift
    let nextArray = .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
            
}
console.log(adjustedArray());

            



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.


// a) Create a test with expect statements for each of the variables provided.


const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


describe('arrayMinMax', () => {

    const nums1 = [-8, 90];
    const nums2 = [5, 109]

    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
      expect([3, 56, 90, -8, 0, 23, 6]).toEqual(
        expect.arrayMinMax(expected),
      );
    });

    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
      expect([109, 5, 9, 67, 8, 24]).not.toEqual(
        expect.arrayMinMax(expected),
      );
    });
  });


// Wasn't able to get the first test to read.
// getting the same error but with this test now.


// b) Create the function that makes the test pass.

// create a function
// have the function filter the numbers from least to greatest in new array
// have the function filter the first and last number of new array into another new array.


const arrayMinMax = (nums1,nums2) => {
    function nums1
    function nums2  
    return array.pop 
    return array.shift()
}
console.log(arrayMinMax());




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


describe('takes in two arrays as arguments and returns one array with no duplicate values', () => {
    const expected = [3, 7, 10, 5, 4, 8, 2, 1]

    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
      expect([3, 7, 10, 5, 4, 3, 3]).toEqual(
        expect.arrayAdd(expected),
      );
    });
    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
      expect([7, 8, 2, 3, 1, 5, 4]).not.toEqual(
        expect.arrayAdd(expected),
      );
    });
  });


// b) Create the function that makes the test pass.

// create function that adds 2 arrays togeth
// create 1 new array with those 2
// have function filter out any numbers that are in the new array more than once.


arrayAdd(testArray1,testArray2)  
     function arrayAdd(testArray1,testArray2){
     let thirdArray = testArray1.concat(testArray2)
     console.log(thirdArray)

     let uniqueArray = []
     for(let i of thirdArray){
         
            if(uniqueArray.indexOf(i) === -1){
                uniqueArray.push(i)
            }
     }
     console.log(uniqueArray)
}

