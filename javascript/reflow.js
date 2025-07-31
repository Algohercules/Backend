//! performance  we are not going to change 

//  code 1 

const t1 = performance.now()

for(let i = 0; i<= 100; i++){
    let para = document.createElement('p');
        para.textContent = "this is para"  + i;
        document.body.appendChild(para);
}


const t2 = performance.now(); 

console.log("total time by code 2"  +  (t2 - t1));


// code 2;

const t3 = performance.now();

let mydiv = document.createElement('div');
for(let i = 0; i<= 100; i++){
    let para = document.createElement('p');
        para.textContent = "this is para"  + i;
        mydiv.appendChild(para);
}

document.body.appendChild(mydiv);


const t4 = performsnce.now();

console.log("total time by code 2"  +  (t4 - t3));



// performance.now  =>  used to measure performance  time of the code too be run  

