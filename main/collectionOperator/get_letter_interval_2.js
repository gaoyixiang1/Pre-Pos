'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'aa','ab','ac','ad','ae','af','ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
  'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
  'az', 'ba'
  ];
  var result=[];
  if(number_a<number_b){
  for(var i=number_a;i<=number_b;i++){
    result.push(str[i]);
  }
  return result;
  }else if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      result.push(str[i]);
    }
    return result;
  }else{
    return [str[number_a]];
  }
}

module.exports = get_letter_interval_2;

