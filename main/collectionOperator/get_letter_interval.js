'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var str=['0','a','b','c','d','e','f','g','h'];
  var result=[];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      result.push(str[i]);
    }
    return result;
  }else if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      result.push(str[i]);
    }
    return result;
  }else{
    return [str[number_a]];
  }
}
module.exports = get_letter_interval;
