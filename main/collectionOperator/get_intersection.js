'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
   for(var i=0;i<collection_b.length;i++){
     if(collection_a.indexOf(collection_b[i])!=-1){
       result.push(collection_b[i]);
     }
   }
   return result;
  }

module.exports = get_intersection;
