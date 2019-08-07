'use strict';
var number_map_to_word = function(collection){
 var str="0abcdefg";
 var result=[];
 var show=[];
 for(var i=0;i<str.length;i++){
   result.push(str[i]);
 }
 for(var j=0;j<collection.length;j++){
   for(var k=0;k<result.length;k++){
     if(k==collection[j]){
      show.push(result[k]);
     }
   }
 }
return show;
};

module.exports = number_map_to_word;
