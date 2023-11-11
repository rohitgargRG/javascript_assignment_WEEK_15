const myObj = {
    "name":"rohit",
    "age" : 20,
    "hobby":"football"
};

let cnt = 0;
function countKeys(myObj){
    for(let key in myObj){
        cnt++;
    }
    return cnt;
}

console.log(`no of properties in myObj are : ${countKeys(myObj)}`);