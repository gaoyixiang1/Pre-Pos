'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result=collection.filter(item=>item%2!=0);
  var arr=result.map((num)=>{
    return (num*3)+5;
  });
  return arr.reduce(function(x,y){
    return x+y;
  });
}

module.exports = hybrid_operation_to_uneven;

