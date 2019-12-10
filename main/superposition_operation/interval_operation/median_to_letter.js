'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var sum=collection.reduce(function(x,y){
    return x+y;
  });
  var middle=Math.ceil(sum/collection.length);
  var result=[];
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
 
  return result[middle-1];
}

module.exports = median_to_letter;
