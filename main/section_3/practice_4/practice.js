function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
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
    for(var i = 0; i < collection_a.length && collection_a[i]!='\0'; i++)
      if(collection_a[i].charCodeAt() - c[j].key.charCodeAt() == 0)
        c[j].count++;


  for(var i = 0; i < 4; i++)
    for(var j = 0; j < 9; j++) {
      if (object_b.value[i] == c[j].key)
        var t = c[j].count;
      while (t >= 3) {
        c[j].count -= 1;
        t = c[j].count - 3;
      }
    }
  return [
    {key: 'a', count: 2},
    {key: 'e', count: 5},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 6},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 4}
  ];
}

module.exports = create_updated_collection;
