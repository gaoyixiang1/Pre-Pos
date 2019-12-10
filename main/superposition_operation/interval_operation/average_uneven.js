'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var arr=collection.filter(item=>item%2!=0);
  var sum=arr.reduce(function(x,y){
    return x+y;
  });
  return sum/arr.length;
}

module.exports = average_uneven;
