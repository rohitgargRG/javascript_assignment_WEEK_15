let str = "Hello, Peoples!"

let left = 0;
let right = str.length - 1;

function stringReverse(str){
    
    return str.split(",").reverse().join("");
};

console.log(`reversed string is: ${stringReverse(str)}`);