'use strict';

module.exports = {
    twoSum: function (arr, target) {
        if(Array.isArray(arr) && target){
          let accum = [];
            for (var i = 0; i < arr.length; i++) {
              for (var x = 0; x < arr.length; x++) {
                let sum = arr[i] + arr[x];
                if(sum === target){
                  accum.push(arr[i]);
                  accum.push(arr[x]);
                  return accum;
                }
              }
            }
        }
        else{
          return "Function needs proper input";
        }
    }
};
