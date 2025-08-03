//!  async aqwait is used to create a situation so that async code behaves as a sync code 

// async function getData(){
//     settimeout(function(){
//         console.log("i am inside the timeout block");
//     }, 3000);
// }


// let output = getdata();

// await - 7;

// fetch API



async function getdata(){
   let response =  fetch('https://jsonpalceholder.typicode.com/todos/1');

   console.log(response);
}


//scenario
// prepare url  / api endpoint -> sync 
// fetch data  -> network calll -> async 
//process data   -> sync 




