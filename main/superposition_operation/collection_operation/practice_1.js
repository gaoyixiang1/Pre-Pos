'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result=[];
  var sum=0;
  for(var i=0;i<collection.length;i++){
    result.push(collection[i]*3+2);
  }
for(var j=0;j<result.length;j++){
  sum+=result[j];
}
return sum;
}

module.exports = hybrid_operation;

