'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2!==0){
      sum+=collection[i];
    }
  }
  return sum;
}

module.exports = average_uneven;
