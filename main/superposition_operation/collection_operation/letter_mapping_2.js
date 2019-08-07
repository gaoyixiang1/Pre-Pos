'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  var str="abcdefghijklmn";
  for(var i=0;i<collection.length;i++){
    sum+=collection[i];
  }
  var aver=Math.ceil(sum/collection.length);
  return str[aver-1];
}

module.exports = average_to_letter;

