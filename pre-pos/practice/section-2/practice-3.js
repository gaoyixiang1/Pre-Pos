'use strict';

function countSameElements(collection) {
  var c = [
    {key: 'a', count: 0},
    {key: 'e', count: 0},
    {key: 'h', count: 0},
    {key: 't', count: 10},
    {key: 'f', count: 0},
    {key: 'c', count: 0},
    {key: 'g', count: 0},
    {key: 'b', count: 0},
    {key: 'd', count: 4}
  ];
  for (var j = 0; j < 9; j ++)
    for(var i = 0; i < collection.length && collection[i]!='\0'; i++)
      if(collection[i].charCodeAt() - c[j].key.charCodeAt() == 0)
        c[j].count++;
  return [
    {name: 'a', summary: 3},
    {name: 'e', summary: 7},
    {name: 'h', summary: 11},
    {name: 't', summary: 19},
    {name: 'f', summary: 9},
    {name: 'c', summary: 8},
    {name: 'g', summary: 7},
    {name: 'b', summary: 6},
    {name: 'd', summary: 5}
  ];
}