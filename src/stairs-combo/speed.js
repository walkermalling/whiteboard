'use strict';


module.exports = function(){
  // to solve for n = 5, this solution recurses 45 times
  // to solve for n = 10, this solution recurses 978 times
  this.count = 0;
  this.countWays = function(n){
    console.dir(this.count++);
    if(n<0){
      return 0;
    }else if(n===0){
      return 1;
    }else{
      return this.countWays(n-1)+this.countWays(n-2)+this.countWays(n-3);
    }
  };

  // to solve for n = 5, this solution recurses 14 times
  // to solve for n = 10, this solution recurses 325 times
  this.myCount = 0;
  this.recurse = function(stairsLeft) {
    console.dir(this.myCount++);
    var solutions = 0
      , s = stairsLeft;
      for(var k = 3; k > 0; k--){
        if(s-k===0) solutions += 1;
        else if (s-k>0) solutions += this.recurse(s-k);
      }
      return solutions;
  };
};
