'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr=[];
  for (var i=0;i<9;i++){
    for(var j=0;j<4;j++){
        if(collectionA[i]==collectionB[0][j])
        {
          arr.push(collectionA[i]);
        }
    }
  }
  return arr;
}