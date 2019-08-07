'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var a = collection.split("->").map(function (a) {
    return parseInt(a);
  });
  a.sort(function (a, b) {
    return a - b;
  });
  if(a.length%2==0)
  {
    return (a[a.length/2]+a[a.length/2-1])/2;
  }
  else {
    return a[(a.length-1)/2];
  }
}

module.exports = compute_chain_median;
