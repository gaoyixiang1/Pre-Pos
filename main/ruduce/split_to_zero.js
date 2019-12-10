'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var collection=[number];
  while (number>0){
    number=Math.round((number-interval)*10)/10;//保留一位小数
    collection.push(number);
  }
  return collection;
}

module.exports = spilt_to_zero;
