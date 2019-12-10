'use strict';
var single_element = function(collection){
var result=[];
var even=[];
for(var i=1;i<=collection.length;i+=2){
    result.push(collection[i]);
}
for(var j=0;j<result.length;j++){
    if(result.indexOf(result[j],j+1)!=-1){
       var flag=result[j];
    }
    if(result[j]!=flag){
        even.push(result[j]);
    }
}
  return even;

};
module.exports = single_element;
