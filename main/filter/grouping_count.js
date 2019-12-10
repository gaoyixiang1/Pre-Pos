'use strict';

function grouping_count(collection) {

  //在这里写入代码
  return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});
}

module.exports = grouping_count;
