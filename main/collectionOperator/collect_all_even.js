'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var newArr=[];
  collection.forEach(element => {
    if(collection[element]%2===0)
    newArr.push(collection[element]);
  });
  return newArr;
}

module.exports = collect_all_even;
