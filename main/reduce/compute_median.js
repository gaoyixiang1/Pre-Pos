'use strict';

function compute_median(collection) {
  //在这里写入代码
    var l = Math.floor((collection.length - 1) / 2);
    var h= Math.ceil((collection.length - 1) / 2);
    return (Number(collection[l]) + Number(collection[h])) / 2;
}

module.exports = compute_median;


