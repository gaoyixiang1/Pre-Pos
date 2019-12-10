function count_same_elements(collection) {
  //在这里写入代码
  var result=[
    {key: "a", count: 0},
    {key: "e", count: 0},
    {key: "h", count: 0},
    {key: "t", count: 0},
    {key: "f", count: 0},
    {key: "c", count: 0},
    {key: "g", count: 0},
    {key: "b", count: 0},
    {key: "d", count: 0}
   ];
   
   for(var j=0;j<result.length;j++){
    for(var i=0;i<collection.length;i++){
       if(collection[i].length==1&&collection[i]==result[j].key){
         result[j].count++;
       }else if(collection[i].length>=1&&collection[i].indexOf(result[j].key)!=-1){
         var flag=collection[i].indexOf('-');
         result[j].key=collection[i].substring(0,flag);
         var r=collection[i].substring(flag+1,collection[i].length);
         result[j].count=Number(r);

       }
     }
   }
   return result;
}

module.exports = count_same_elements;
