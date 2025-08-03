//!  closure

//* ek function ko jab uske data ke sath bind kiya jata hai to use hi closures kehte hain


function init (){

    var name = "mozilla" ;
    function displayname(){
        console.log("name");
    }
    displayname();
}
init();

