'use strict';
var single_element = function(collection){
var result=[];
for(var i=1;i<collection.length;i+=2){
    result.push(collection[i]);
}
var count=1;
for(var j=0;j<result.length;j++){
    if(result[j]===result[j+1]){
        count+=1;
    }
}
if(count%2!==0){
    result=[];
}
return result.splice(count,result.length);
};
module.exports = single_element;
