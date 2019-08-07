'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if(number_a>number_b){
   for(var i=number_a;i>=number_b;i--){
    if(i%2==0){
      result.push(i);
    }
   }
   return result;
  }else if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      if(i%2==0){
        result.push(i);
      }
    }
      return result;
  }else{
    if(number_a%2==0){
      return [number_a];
    }else{

      return [];
    }
  }
}

module.exports = get_integer_interval_2;
