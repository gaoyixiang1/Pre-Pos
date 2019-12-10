'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var odd=collection.reduce(function(x,y){
    return x+y;
  });
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
    return  result[Math.ceil(odd/collection.length)-1];
}

module.exports = average_to_letter;

