'use strict';

function even_to_letter(collection) {
  var odd=collection.filter(item=>item%2==0);
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
    for(var l=0;l<odd.length;l++){
      outcome.push(result[odd[l]-1]);
    }
    return outcome;

}

module.exports = even_to_letter;
