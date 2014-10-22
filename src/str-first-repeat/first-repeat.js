'use strict';

module.exports = function() {

  var err = new TypeError('Wrong argument type');

  this.getFirstRepeat = function(str){
  
    if(typeof str != 'string') throw err;

    var store  = [];
    for( var k = 0; k < str.length; k++ ){
      var character = str[k];
      if( store.indexOf(character) > -1 ) return character;
      else store.push(character);
    }
    return false;
  };

};