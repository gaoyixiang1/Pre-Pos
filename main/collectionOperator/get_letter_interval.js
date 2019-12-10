'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
var outcome=[];
var arr=new Array();
for(var i=0;i<26;i++){
    arr[i]=new Array(); 
    for(var j=0;j<26;j++){
      if(i==0){
        arr[i][j]=String.fromCharCode(j+97);
      }
      else{
        arr[i][j]=String.fromCharCode(i-1+97)+String.fromCharCode(j+97);
      }
  }
}
  for(var k=0;k<26;k++){
    for(var g=0;g<26;g++){
    result.push(arr[k][g]);
    }
  }
  if(number_a<=number_b){
    for(var l=number_a-1;l<number_b;l++){
      outcome.push(result[l]);
    }
    return outcome;
  }else{
    for(var l=number_b-1;l<number_a;l++){
      outcome.push(result[l]);
    }
    return outcome.reverse();

  }  
}

module.exports = get_letter_interval;
