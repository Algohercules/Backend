 //? classes and objects 
 
 //blureprint -> class (planning)
 //actual thing -> object (execution of planning)

 class human{

      // properties
      age = 13;
      weight = 15;
      height = 180;

      //behaviour
      walking(){
        console.log(" i am walking");
      }

      running(){
        console.log("i am running");
      }
 }

 let obj = new human();
 console.log(obj.age);
 obj.walking();

 //! # is used to mark a property private 
 // to access it use this.#property 

 