'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var arr= collection.map((num)=>{
    return (num*3)+2;
  });
  return arr.reduce(function(x,y){
    return x+y;
  });
}

module.exports = hybrid_operation;

