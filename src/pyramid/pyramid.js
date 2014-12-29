'use strict';

var PyramidNode = require('./pyramid-node');

var Pyramid = function (data) {
  
  this.root = null;

};

Pyramid.prototype.generateFromArray = function (arr) {
  for (var k = 0; k < arr.length - 1; k++) {
    this.insertNextNumber(arr[k]);
  }
  return true;
};

Pyramid.prototype.insertNextNumber = function (number) {

  var newNode = new PyramidNode(number);

  if (this.root === null) {
    newNode.leftParent = false;
    newNode.rightParent = false;
    this.root = newNode;
  } else {
    var current = this.root;
    insertLoop: while (true) {

      if (current.leftChild === null && current.rightChild === null) {
        newNode.rightParent = current;
        current.leftChild = newNode;
        break insertLoop;
      }

      else if (current.leftChild !== null && current.rightChild === null) {
        newNode.leftParent = current;
        current.rightChild == newNode;
        // TODO check right parent ?
        break insertLoop;
      }

      else if (current.leftChild !== null && current.rightChild !== null) {
        // check for open slots to the right
        
        var rightSibling = current.rightParent.rightChild;

        rightSiblingLoop: while (true) {
          // check if current right sibling exists and has a right child
          // NB: no need to check if right sibling has a *left child*
          if (rightSibling.rightChild === null) {
            rightSibling.rightChild = newNode;
            break insertLoop;
          }

          // if right parent's right child exists, set that as the next right sibling
          else if (!!rightSibling.rightParent && !!rightSibling.rightParent.rightChild){
            rightSibling = rightSibling.rightParent.rightChild;
            // loop again
          }

          else {
            // no sibling slots open, look left of current
            current = current.leftChild;
            break rightSiblingLoop;
          }

        }
        
      }
      
    }

  }
};

module.exports = Pyramid;