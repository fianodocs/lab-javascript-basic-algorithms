// Iteration 1: Names and Input
/*const hacker1 ="XXXX";


const hacker2 ="YYYY"


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length){
    console.log(hacker1 + " is the longer name")
} else if(hacker1.length<hacker2.length){
    console.log(hacker2 + " is the longer name")
}else {
    console.log(`${hacker1} & ${hacker2} are equal in length of character..`)
}
*/

// Iteration 3: Loops


const hacker1 ="tilo";
let capSpace = "";

for (let i = 0; i<hacker1.length; i++){
    capSpace += hacker1[i].concat(" ");
    
}
let capSpace2 ="";
const hacker2 ="shereen";
for (let u= hacker2.length-1; u>=0; u--){
    capSpace2 += hacker2[u];
}
console.log(capSpace2);
console.log(capSpace.toUpperCase());