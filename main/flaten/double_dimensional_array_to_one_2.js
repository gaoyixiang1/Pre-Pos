'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_a=[];
var collection_b=[];
 //在这里写入代码
 //二维数组变成一维数组
 for (var i = 0; i < collection.length; i++) {
     for (var j = 0; j < collection[i].length; j++) {
       collection_a.push(collection[i][j]);
     }
 }
 //消除重复，按照第一次出现的顺序排列最后的输出结果
 for (let i = 0; i < collection_a.length; i++) {
   if(collection_b.indexOf(collection_a[i])==-1)//未出现
   {
     collection_b.push(collection_a[i]);
   }
 }
 return collection_b;
}

module.exports = double_to_one;
