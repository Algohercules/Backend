//?  any event due to which the normal flow of execution is interrupted is calle an error 

//! there are two types of error 
// compile time error --> they are caught during the time of parsing of the code  (before execution of the code )
// run time error --> the error detected during the compilation of code

//* try-catch block

try{
    //wo likho jahan error aa skta hai 
console.log(x);
// jahan error hai uske baad ka kuchh bhi execute nahi hoga

}

catch(error){
    // define karo error ke sathkya krna hai
    console.log("i am inside catch block")

}


//* finally block

try{
    console.log("x");   
}

catch(e){
    console.log(" iam inside catch block");
}



finally {
    console.log("this will run everytime");
}


//!  custom error 

try{
    console.log(x);
}

catch(err){
    throw new Error("bhai pehle declare kr do");
}
