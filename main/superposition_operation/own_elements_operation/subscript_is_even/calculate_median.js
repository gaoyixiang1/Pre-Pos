'use strict';
var calculate_median = function(collection){
    var result=[];
    for(var i=0;i<collection.length;i++){
        if(collection[i]%2==0){
            result.push(collection[i]);
        }
    }
    if(result.length%2!==0){
        return result[Math.floor(result.length/2)];
    }else{
        var sum=result[result.length/2]+result[result.length/2-1];
        return sum/2;
    }
};
module.exports = calculate_median;
