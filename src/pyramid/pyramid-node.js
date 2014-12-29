'use strict';

var PyramidNode = function (data) {
  this.data = data;
  this.leftParent = null;
  this.rightParent = null;
  this.leftChild = null;
  this.rightChild = null;
};

module.exports = PyramidNode;