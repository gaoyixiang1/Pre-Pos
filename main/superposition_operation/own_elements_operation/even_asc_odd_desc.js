'use strict';
var even_asc_odd_desc = function(collection){
    var even=collection.filter(item=>item%2==0);
    even.sort(function(x,y){
        return x-y;
    });
    var odd=collection.filter(item=>item%2!=0);
    odd.sort(function(x,y){
        return y-x;
    });
    for(var i=0;i<odd.length;i++){
        even.push(odd[i]);
    }
    return even;

};
module.exports = even_asc_odd_desc;
