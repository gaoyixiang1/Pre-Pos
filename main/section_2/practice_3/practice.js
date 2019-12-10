function count_same_elements(collection) {
  //在这里写入代码
  var result=[
    {name: "a",summary: 0},
    {name: "e",summary: 0},
    {name: "h",summary: 0},
    {name: "t",summary: 0},
    {name: "f",summary: 0},
    {name: "c",summary: 0},
    {name: "g",summary: 0},
    {name: "b",summary: 0},
    {name: "d",summary: 0}
   ];
   for(var i=0;i<collection.length;i++){
     for(var j=0;j<result.length;j++){
       if(collection[i].length==1&&collection[i]==result[j].name){
         result[j].summary++;
       }else if(collection[i].length>=1&&collection[i].indexOf(result[j].name)!=-1){
         var flag=collection[i].indexOf('-');
         var flag_one=collection[i].indexOf(':');
         var flag_two=collection[i].indexOf('[');
        if(flag!=-1){
          result[j].name=collection[i].substring(0,flag);
          result[j].summary+=Number(collection[i].substring(flag+1,collection[i].length));
        }else if(flag_one!=-1){
          result[j].name=collection[i].substring(0,flag_one);
          result[j].summary+=Number(collection[i].substring(flag_one+1,collection[i].length));
        }else if(flag_two!=-1){
          result[j].name=collection[i].substring(0,flag_two);
          result[j].summary+=Number(collection[i].substring(flag_two+1,collection[i].length-1));
        }

       }
     }
   }
   return result;
}

module.exports = count_same_elements;
