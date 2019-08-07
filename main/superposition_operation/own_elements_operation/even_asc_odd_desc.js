'use strict';
var even_asc_odd_desc = function(collection){
    var odd=[];
    var even=[];
    var result=[];
for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
        even.push(collection[i]);
    }else{
        odd.push(collection[i]);
    }
}
result=[even.sort(function(a,b){
    return a-b;
}),odd.sort(function(a,b){
    return a-b;
}).reverse()];
result=result.reduce(function(a,b){
    return a.concat(b);
})
return result;
};
module.exports = even_asc_odd_desc;
