'use strict';
var number_map_to_word_over_26 = function(collection){
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'aa','ab','ac','ad','ae','af','ag'
];
var result=[];

for(var j=0;j<collection.length;j++)
for(var i=0;i<str.length;i++){
  if(collection[j]==i){
    result.push(str[i]);
  }
}

return result;
};

module.exports = number_map_to_word_over_26;
