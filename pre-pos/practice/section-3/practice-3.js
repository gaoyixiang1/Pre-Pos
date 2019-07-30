'use strict';

function createUpdatedCollection(collectionA, objectB) {
 // 在此写代码
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
    	for(var i = 0; i < collectionA.length && collectionA[i]!='\0'; i++)
       		if(collectionA[i]== collectionC[j].key)
       		collectionC[j].count++;
    for (var m=0;m<collectionC.length;m++)
  		for (var n=0;n<objectB.value.length;n++)
  			if (collectionC[m].key==objectB.value[n])
  				collectionC[m].count-=Math.floor(collectionC[m].count/3);
  	console.log(collectionC);
  	return collectionC;
}

