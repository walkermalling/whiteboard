 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var StrRepeat = require(rootPath + '/src/str-first-repeat/first-repeat');

describe('Get first Repeating Character',function(){

  var firstRepeat;

  beforeEach(function(){
    firstRepeat = new StrRepeat();
  });

  it('is ok', function(){
    expect(firstRepeat).to.be.ok;
    expect(typeof firstRepeat === 'function').to.eql(true);
  });



  // it('gets first repeating character of a given string', function(){
  //   expect(firstRepeat('sally')).to.eql('l');
  // });

  

});
