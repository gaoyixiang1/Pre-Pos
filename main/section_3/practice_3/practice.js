function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionC = [
    {key: 'a', count: 0},
    {key: 'e', count: 0},
    {key: 'h', count: 0},
    {key: 't', count: 0},
    {key: 'f', count: 0},
    {key: 'c', count: 0},
    {key: 'g', count: 0},
    {key: 'b', count: 0},
    {key: 'd', count: 0}
  	];
  	for (var j = 0; j < 9; j ++)
    	for(var i = 0; i < collection_a.length && collection_a[i]!='\0'; i++)
       		if(collection_a[i]== collectionC[j].key)
       		collectionC[j].count++;
    for (var m=0;m<collectionC.length;m++)
  		for (var n=0;n<object_b.value.length;n++)
  			if (collectionC[m].key==object_b.value[n])
  				collectionC[m].count-=Math.floor(collectionC[m].count/3);
  
  	return collectionC;
}

module.exports = create_updated_collection;
