 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var StrRepeat = require(rootPath + '/src/str-first-repeat/first-repeat');

describe('Get first Repeating Character',function(){
  var module;

  beforeEach(function(){
    module = new StrRepeat();
  })

  it('module is ok', function(){
    expect(module).to.be.ok;
    expect(typeof module === 'object').to.eql(true);
    expect(module.getFirstRepeat('some string')).to.eql('s');
  });  

  it('returns the first repeated character of a string', function(){
    expect(module.getFirstRepeat('some string')).to.eql('s');
  }); 

  it('returns false if no characters repeat', function(){
    expect(module.getFirstRepeat('abcde')).to.eql(false);
  }); 

  it('returns false if argument is empty', function(){
    expect(module.getFirstRepeat('')).to.eql(false);
  }); 

  it('throws error if wrong data type is passed', function(){
    expect(module.getFirstRepeat).to.throw(TypeError);
  }); 


});
