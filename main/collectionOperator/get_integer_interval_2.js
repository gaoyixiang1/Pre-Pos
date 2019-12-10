'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      if(i%2===0){
          result.push(i);
      }
    }
  }
  if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      if(i%2===0){
          result.push(i);
      }
    }
  }
  if(number_a===number_b){
    if(number_a%2==0)
      result.push(number_a);
  }
 return result;
}

module.exports = get_integer_interval_2;
