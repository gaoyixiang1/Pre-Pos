'use strict';

function createUpdatedCollection(collectionA, objectB) {
// 在此写代码

for (var i=0;i<collectionA.length;i++)
{
	for (var j=0;j<objectB.value.length; j++) {
		if (collectionA[i].key==objectB.value[j]) {
			collectionA[i].count-=1;
		}
	}
	}
	return collectionA;
}
