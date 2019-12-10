function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arrA=[];
  var arrB=[];
  for(var i=0;i<collection_a.length;i++){
    arrA.push(collection_a[i].key);
  }
  
  arrB=collection_b.value;
  var result=[];
  for(var j=0;j<arrA.length;j++){
    if(arrB.indexOf(arrA[j])!=-1){
       result.push(arrA[j]);
    }
  }

return result;
}

module.exports = collect_same_elements;
