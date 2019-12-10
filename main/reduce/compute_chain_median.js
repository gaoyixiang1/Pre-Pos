'use strict';

function compute_chain_median(chain) {
  var arr = chain.split('->').sort(function (a,b) {
  return a - b;
  });
  var l = Math.floor((arr.length - 1) / 2);
  var h= Math.ceil((arr.length - 1) / 2);
  return (Number(arr[l]) + Number(arr[h])) / 2;
  }

module.exports = compute_chain_median;
