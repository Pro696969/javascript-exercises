const repeatString = function(s,num) {
    let s2="";
    if (num < 0) {
        return "ERROR";
    }
    for(let i=0; i<num; i++) {
        s2+=s
    }
    return s2;

};

// Do not edit below this line
module.exports = repeatString;
