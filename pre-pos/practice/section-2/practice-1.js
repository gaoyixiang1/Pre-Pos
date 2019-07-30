'use strict';

function countSameElements(collection) {
// 在
// 此写代码
  var c = [
    {key: 'a', count: 0},
    {key: 'e', count: 0},
    {key: 'h', count: 0},
    {key: 't', count: 0},
    {key: 'f', count: 0},
    {key: 'c', count: 0},
    {key: 'g', count: 0},
    {key: 'b', count: 0},
    {key: 'd', count: 0}
  ];
  for (var i= 0; i < 9; i++) {
    for (var j = 0; j < collection.length && collection[i] != '\0'; j++) {
      if (c[i].key == collection[j]) {
        c[i].count++;
      }
    }
  }
return c;
}





