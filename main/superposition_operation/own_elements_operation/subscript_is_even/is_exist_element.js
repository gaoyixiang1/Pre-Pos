'use strict';
var is_exist_element = function(collection,element){
    var even=collection.filter(item=>collection.indexOf(item)%2==0);
    if(even.indexOf(element)!=-1){
        return true;
    }else{
        return false;
    }
};
module.exports = is_exist_element;
