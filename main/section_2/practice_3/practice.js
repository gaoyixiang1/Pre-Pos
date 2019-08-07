function count_same_elements(collection) {
  //在这里写入代码
var collection_a = [];
var m = {};
for (let i = 0; i < collection.length; i++) {
  if (collection[i].length == 1) {
    var k=collection[i];
    var v=1;
    if (k in m) {
      m[k] = m[k] + v;
    }
    else {
      m[k] = v;
    }
  }
  else {
    if(collection[i].length>3)
    {
      var k = collection[i][0];
      var v = parseInt(collection[i].slice(2,collection[i].length-1));
      if (k in m) {
        m[k] = m[k] + v;
      }
      else {
        m[k] = v;
      }
    }
    else {
      var k = collection[i][0];
      var v = parseInt(collection[i].slice(2));
      if (k in m) {
        m[k] = m[k] + v;
      }
      else {
        m[k] = v;
      }
    }
  }
}
for (var key in m) {
  var temp = {};
  temp['name'] = key;
  temp['summary'] = m[key];
  collection_a.push(temp);
}
return collection_a;
}

module.exports = count_same_elements;
