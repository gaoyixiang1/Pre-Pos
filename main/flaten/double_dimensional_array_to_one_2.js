'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var str=collection.toString();
  var show=[];
 for(var i=0;i<str.length;i++){
     show.push(Number(str[i]));//将字符串的每一项转化为数字
 }         
  var arr=show.filter(function(x){
           return Boolean(x); //去除数组里面的NaN,false ,0,null等
              }
         );
  return arr.filter((x,index,self)=>self.indexOf(x)===index);
}

module.exports = double_to_one;
