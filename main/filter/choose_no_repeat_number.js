'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=collection.filter((x,index,self)=>self.indexOf(x)===index);
  return result;
}

module.exports = choose_no_repeat_number;
