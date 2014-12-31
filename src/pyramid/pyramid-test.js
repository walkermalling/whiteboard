'use strict';

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Pyramid = require(rootPath + '/src/pyramid/pyramid');

describe('Pyramid',function(){

  var p;

  beforeEach(function (){
    p = new Pyramid();
  });

  it('doesn\'t suck', function (){
    expect(p).to.be.instanceOf(Pyramid);
  });

  it('should generate a pyramid from an array of numbers', function () {
    p.generateFromArray([1,2,3,4,5,6]);
    expect(p.inserted).to.eql(6);
  });

  it('should genearte a pyramid from an array of arrays of numbers', function () {
    p.generateFromArray([
        [1],
        [2,3],
        [4,5,6]
      ]);
    expect(p.inserted).to.eql(6);
  });

  it('nodes with two parents should have two parents', function () {
    p.generateFromArray([1,2,3,4,5,6]);
    var fifthNode = p.root.leftChild.rightChild;
    expect(fifthNode.data).to.eql(5);
    expect(fifthNode.leftParent.data).to.eql(2);
    expect(fifthNode.rightParent.data).to.eql(3);
    expect(p.root.rightChild.leftChild.data).to.eql(5);
  });

  it('should be able to find the number of possible paths', function () {
    // 2 tier pyramid
    p.generateFromArray([1,2,3]);
    p.tracePaths();
    expect(p.paths.length).to.eql(2);

    // 3 tier pyramid
    var p1 = new Pyramid();
    p1.generateFromArray([1,2,3,4,5,6]);
    p1.tracePaths();
    expect(p1.paths.length).to.eql(4);
  });

  it('each path contains correct number of nodes', function () {
    // check 2 tier pyramid
    p.generateFromArray([1,2,3,]);
    p.tracePaths();
    p.paths.forEach(function (path) {
      expect(path.length).to.eql(2);
    });

    // 3 tier pyramid
    var p1 = new Pyramid();
    p1.generateFromArray([1,2,3,4,5,6]);
    p1.tracePaths();
    p1.paths.forEach(function (path) {
      expect(path.length).to.eql(3);
    });
  })

  it('should be able to find the path with the smallest sum of nodes');

  it('should be able to find the path with the largest sum of nodes');

});
