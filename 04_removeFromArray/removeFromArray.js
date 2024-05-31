const removeFromArray = function(arr, ...p) {
   let a2 = [];
    for (let i of arr){
        if(!(p.includes(i))) {
            a2.push(i)
        }
   }
   return a2;
};

// Do not edit below this line
module.exports = removeFromArray;
