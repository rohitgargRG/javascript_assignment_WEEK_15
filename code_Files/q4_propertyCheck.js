const Obj = {
    "name":"RG",
    "score" : 100,
    "sports" : "FOOTBALL"
};

function propCheck(Obj , prop){
    for(let key in Obj){
        if(key === prop) return true;
    }
    return false;
}

if(propCheck(Obj,"score")) console.log(`property exists`);
else console.log(`property does not exist`);