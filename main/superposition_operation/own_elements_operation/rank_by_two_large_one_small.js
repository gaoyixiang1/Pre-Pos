'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。

  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
}
  collection.sort(function(a,b){
    return a-b;
  })
  var b=[];
  for(var i=0;i<collection.length;){
     b.push(collection.slice(i,i+3));
      i+=3;
  }
  for(var j=0;j<b.length;j++){
   if(b[j].length==3){
     array_move(b[j],0,2);
   }
  }
  var show = b.reduce(function (a, b) { return a.concat(b)} );
  return show;
}
  
  

module.exports = rank_by_two_large_one_small;
