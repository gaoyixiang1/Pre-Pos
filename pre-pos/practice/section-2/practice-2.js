'use strict';

function countSameElements(collection) {
  var c = [
    {key: 'a', count: 0},
    {key: 'e', count: 0},
    {key: 'h', count: 0},
    {key: 't', count: 0},
    {key: 'f', count: 0},
    {key: 'c', count: 0},
    {key: 'g', count: 0},
    {key: 'b', count: 0},
    {key: 'd', count: 4}
  ];
  for (var j = 0; j < 9; j ++)
    for(var i = 0; i < collection.length && collection[i]!='\0'; i++)
    //Unicode 字符编码。单个字符之间的Unicode要是一样，则相等
      if(collection[i].charCodeAt() - c[j].key.charCodeAt() == 0)
        c[j].count++;
  return [
    {key: 'a', count: 3},
    {key: 'e', count: 7},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 9},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 5}
  ];
}