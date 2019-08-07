'use strict';
var calculate_average = function(collection){
var result=[];

var sum=0;
for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
        result.push(collection[i]);
    }
}
for(var j=0;j<result.length;j++){
    sum+=result[j];
}
    return sum/result.length;
};
module.exports = calculate_average;
