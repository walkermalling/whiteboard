 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Stairs = require(rootPath + '/src/stairs-combo/stairs-combo');

describe('Stair Combo',function(){

  var stairs;

  beforeEach(function(){
    stairs = new Stairs();
  });

  function prep(totalStairs, maxPeriod){
    stairs.setStairs(totalStairs);
    stairs.setPeriod(maxPeriod);
  }

  it('doesn\'t suck', function(){
    expect(stairs).to.be.instanceOf(Stairs);
  });

  it('my solution sovles for stairs = 4, period = 3', function(){
    prep(4,3);
    stairs.solutions = stairs.recurse(stairs.stairs);
    expect(stairs.solutions).to.eql(7);
  });

  it('book solution A solves for 4 x 3', function(){
    prep(4,3);
    stairs.solutions = stairs.countWays(stairs.stairs);
    expect(stairs.solutions).to.eql(7);
  });

  it('book solution A solves for 5 x 3', function(){
    prep(5,3);
    stairs.solutions = stairs.countWays(stairs.stairs);
    expect(stairs.solutions).to.eql(13);
  });

  it('book solution B solves for 4 x 3', function(){
    prep(4,3);
    stairs.solutions = stairs.countWays2(stairs.stairs, stairs.map);
    expect(stairs.solutions).to.eql(7);
  });

});
