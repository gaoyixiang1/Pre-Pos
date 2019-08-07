'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var str="abcdefghijklmn";
  var result=[];
  for(var i=0;i<collection.length;i++){
    
    if(collection[i]%2==0){
      result.push(str[i]);
    }
  }
  return result;
}

module.exports = even_to_letter;
