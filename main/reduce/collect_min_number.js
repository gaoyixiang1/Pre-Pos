'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function(x,y){
    return  x>y?y:x;
  });
}

module.exports = collect_min_number;

