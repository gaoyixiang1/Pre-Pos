function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
   for(var j=0;j<collection_a.length;j++){
     if(collection_b.indexOf(collection_a[j])!=-1){
        result.push(collection_a[j]);
     }
   }
  
return result;
}

module.exports = collect_same_elements;
