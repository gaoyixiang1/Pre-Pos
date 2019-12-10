'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
 for(var i=0;i<collection_b.length;i++){
   if(collection_a.indexOf(collection_b[i])==-1){
     collection_a.push(collection_b[i]);
   }
 }
 return collection_a;
}

module.exports = get_union;

