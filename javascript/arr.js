/*
* primitive data  types are stored in stack style of memory

! reference datatypes like arrays objects and functions are stored in heap style of memory 
to access this heap memory we need a pointer(reference) which is in stack memory
*/


// let obj ={
//     name : "love"
// };

// console.log(obj);


//? shallow copy
//?  deep copy


//! declaration of arrays 

// let arr = [1,2,3,4,5];
// console.log(arr);

// //* using array constructor

// let brr = new Array('love', 1, true)
// console.log(brr);

//?   operations on arrays
/*
?   push => insert at end

?   pop  => deletes the end

?   shift => . remove first item

?   unshift  => add first item

?   slice => new part

?   splice => content change


?   map => used to direct every element of an array to a function and then return the resultant value 

?  filter =>  used to create such a function that filters the elements of an array


?  reduce => (accumulator and current)

?  sort => (ascending and decending)

?  index of 

?  size of 

*/


//!   arrays with functions

let arr = [10,20,30,40,50];

function getSum(arr){
    let len = arr.length;
    let sum = 0;
    for(let index = 0; index<length; index++){
        sum = sum + arr[index];
    }
    return sum;
    
    let totalSum = getSum(arr);
    console.log(totalSum);
}
