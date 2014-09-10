'use strict';

var Stairs = function(totalStairs, maxPeriod){
  this.stairs = totalStairs || 5;
  this.p = maxPeriod || 3;
  this.solutions = null;
  this.map = [];
};

// my solution at the whiteboard
Stairs.prototype.recurse = function(stairsLeft) {
  var solutions = 0, s = stairsLeft;
    for(var k = this.p; k > 0; k--){
      if(s-k===0) solutions += 1;
      else if (s-k>0) solutions += this.recurse(s-k);
    }
    return solutions;
};

Stairs.prototype.setStairs = function(totalStairs) {
  this.stairs = Math.abs(parseInt(totalStairs));
};

Stairs.prototype.setPeriod = function(maxPeriod) {
  this.p = Math.abs(parseInt(maxPeriod));
};

// book solution A
// (doesn't allow for a period greater than 3)

Stairs.prototype.countWays = function(n) { 
  if(n < 0){
    return 0;
  } else if (n === 0){
    return 1;
  } else {
    return this.countWays(n - 1) + this.countWays(n -2) + this.countWays(n - 3);
  }
};

// book solution B
// (doesn't allow for a period greater than 3)

Stairs.prototype.countWays2 = function(n, map) { 
  if(n < 0){
    return 0;
  } else if (n === 0){
    return 1;
  }else if (map[n] > -1) {
    return map[n];
  } else {
    map[n] = this.countWays2(n - 1, map) + this.countWays2(n - 2, map) + this.countWays2(n - 3, map);
    return map[n];
  }
};



module.exports = Stairs;