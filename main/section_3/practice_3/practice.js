function create_updated_collection(collection_a, object_b) {
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
   for(var i=0;i<collection_a.length;i++){
     for(var j=0;j<result.length;j++){
       if(collection_a[i]==result[j].key){
         result[j].count++;
       }
     }
   }
   for(var i=0;i<result.length;i++){
    for(var j=0;j<object_b.value.length;j++){
      if(result[i].key==object_b.value[j]){
        if(result[i].count>1){
          result[i].count-=1*(Math.floor(result[i].count/3));
        }
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
