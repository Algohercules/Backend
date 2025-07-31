//! performance  we are not going to change 

//  code 1 

const t1 = performance.now()

for(let i = 0; i<= 100; i++){
    let para = document.createElement('p');
        para.textContent = "this is para"  + i;
        document.body.appendChild(para);
}


const t2 = performance.now(); 

console.log("total time by code 1"  +  (t2 - t1));


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


//!  reflow and repaint 

// reflow is the process of calculating position ort dimension of element 
// while 
// repaint is the process of displaying content element pixerl by pixel

//* repaint is faster than reflow 

// jitjne akm reflow aur repaints honge utna fater code hoga 


// jab bhi fragment me kuchhh bhu add hots hai to it takes no reflow and no repaint jbki jab bhi element me kuchh add  hota hai it takes one reflow and one repaint 





