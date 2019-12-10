'use strict';
var even_group_calculate_average = function(collection){
    var even=collection.filter(item=>collection.indexOf(item)%2!=0);
    var odd=even.filter(item=>item%2==0);
    if(odd.length==0){
        return [0];
    }
    var one=odd.filter(item=>item<10);
    var two=odd.filter(item=>item<100&&item>9);
    var three=odd.filter(item=>item<1000&&item>99);
    var result=[];
    var average=function(arr){
        if(arr.length!=0){
            var sum=arr.reduce(function(x,y){
                return x+y;
            });
            return sum/arr.length;
        }else{
            return ;
        }
    }
    result.push(average(one),average(two),average(three));
    
    return result.filter(function(x){
        return Boolean(x);
    });
};
module.exports = even_group_calculate_average;
