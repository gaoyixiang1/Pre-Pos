'use strict';
var calculate_average = function(collection){
    var even=collection.filter(item=>collection.indexOf(item)%2!=0);
    var sum=even.reduce(function(x,y){
        return x+y;
    });
    return sum/even.length;
};
module.exports = calculate_average;
