'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var str='0abcdefghijklmnopqrstuvwxyz';
  var data=[];
  for (let i = 0; i < str.length; i++) {
    data.push(str[i]);
  }
  for (let i = 1; i <str.length ; i++) {
    for (let j = 1; j < str.length; j++) {
      data.push(str[i]+str[j]);
    }
  }
    if(collection.length%2==1){
    return data[collection[collection.length-1/2]];
  }else {
    return data[Math.ceil((collection[collection.length/2]+collection[(collection.length/2)-1])/2)];
  }
}

module.exports = median_to_letter;
