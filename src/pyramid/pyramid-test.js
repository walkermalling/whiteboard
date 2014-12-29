'use strict';

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Pyramid = require(rootPath + '/src/pyramid/pyramid');

describe('Pyramid',function(){

  var p;

  beforeEach(function(){
    p = new Pyramid();
  });

  it('doesn\'t suck', function(){
    expect(p).to.be.instanceOf(Pyramid);
  });

  it('should generate a pyramid from an array of numbers');

  it('should genearte a pyramid from an array of arrays of numbers');

  it('should be able to find a node');

  it('should be able to find the number of possible paths');

  it('should be able to find the path with the smallest sum of nodes');

  it('should be able to find the path with the largest sum of nodes');

  // it('', function(){
  //   prep(4,3);
  //   stairs.solutions = stairs.recurse(stairs.stairs);
  //   expect(stairs.solutions).to.eql(7);
  // });

});
