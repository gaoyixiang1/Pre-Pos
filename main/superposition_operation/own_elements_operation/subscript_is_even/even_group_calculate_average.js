'use strict';
var even_group_calculate_average = function(collection){
    var res = collection.filter(function (a, index) {
        return index % 2 == 1 && a % 2 == 0;////第偶数个元素即下标为奇数的元素以及元素值为偶数
      });
    //首先选出所有第偶数个元素，然后选出其中的偶数，再判断其个数。 
      if (res.length == 0) {
        return [0];
      }
      else {
        var a1 = res.filter(function (a) {
          return a / 10 < 1;
        });
        var a2 = res.filter(function (a) {
          return a / 10 >= 1 && a / 100 < 1;
        });
    
        var a3 = res.filter(function (a) {
          return a / 100 >= 1;
        });
        if(a1.length==0&& a2.length==0)
        {
          return [a3.reduce(function (a,b) {
            return a+b;
          })/a3.length];
        }
        else {
          return [a1.reduce(function (a,b) {
            return a+b;
          })/a1.length,a2.reduce(function (a,b) {
            return a+b;
          })/a2.length,a3.reduce(function (a,b) {
            return a+b;
          })/a3.length];
        }
      }
};
module.exports = even_group_calculate_average;
