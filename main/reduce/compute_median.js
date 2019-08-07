'use strict';

function compute_median(collection) {
  //在这里写入代码
  if(collection.length%2!=0){
    return collection[(collection.length-1)/2];
  }else{
    var sum=collection[collection.length/2]+collection[collection.length/2-1];
    return sum/2;
  }
}

module.exports = compute_median;


