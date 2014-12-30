'use strict';

var PyramidNode = require('./pyramid-node');

var Pyramid = function (data) {
  
  this.root = null;
  this.inserted = 0;

  if (data) generateFromArray(data)

};

Pyramid.prototype.generateFromArray = function (arr) {
  var data = arr;
  if (detectNested(data)) 
    data = flatten(data);

  for (var k = 0; k < data.length; k++) {
    this.insertNextNumber(data[k]);
  }

  return true;

  function detectNested (a) {
    var nested = 0;
    for (var j = 0; j < a.length; j++) {
      if (typeof a[j] === 'object')
        if (a[j].length === j + 1) nested++;
        else; // not a full pyramid
    }
    if (nested === 0) return false;
    if (nested === a.length) return true;
    else throw new Error('Gived Pyramid data is incongruous.'); 
  }

  function flatten (a) {
    var flattened = [];
    for (var k = 0; k < a.length; k++) {
      for (var j = 0; j < a[k].length; j++) {
        flattened.push(a[k][j]);
      }
    }
    return flattened;
  }

};

Pyramid.prototype.insertNextNumber = function (number) {

  var newNode = new PyramidNode(number);

  if (this.root === null) {
    newNode.leftParent = false;
    newNode.rightParent = false;
    this.root = newNode;

    this.inserted++;
    // console.log('add ' + newNode.data + ' as root');

  } else {

    var current = this.root;
    insertLoop: while (true) {

      if (current.leftChild === null && current.rightChild === null) {
        newNode.rightParent = current;
        current.leftChild = newNode;

        this.inserted++;
        // console.log('add ' + newNode.data + ' as left child of ' + current.data);
        break insertLoop;

      } else if (current.leftChild !== null && current.rightChild === null) {
        newNode.leftParent = current;
        current.rightChild = newNode;
        this.inserted++;
        // console.log('add ' + newNode.data + ' as right child of ' + current.data);
        
        // if there is a right parent, set as left child of right parent
        if (current.rightParent && current.rightParent.rightChild){
          newNode.rightParent = current.rightParent.rightChild;
          current.rightParent.rightChild.leftChild = newNode;
        } else {
          newNode.rightParent = false;
        }

        break insertLoop;

      } else if (current.leftChild !== null && current.rightChild !== null) {
        // check for open slots to the right
        // console.log('checking right siblings');

        var rightSibling = false;

        if (current.rightParent && current.rightParent.rightChild) {

          rightSibling = current.rightParent.rightChild;

          rightSiblingLoop: while (true) {

            // console.log('entering rightSiblingLoop');

            // check if current right sibling exists and has a right child
            // NB: no need to check if right sibling has a *left child*
            if (rightSibling.rightChild === null) {
              newNode.leftParent = rightSibling;
              rightSibling.rightChild = newNode;
              this.inserted++;
              // console.log('add ' + newNode.data + ' as right child of ' + rightSibling.data);
              break insertLoop;
            }

            // if right parent's right child exists, set that as the next right sibling
            else if (!!rightSibling.rightParent && !!rightSibling.rightParent.rightChild){
              rightSibling = rightSibling.rightParent.rightChild;

              // console.log('looking for another right sibling');
              // loop again
            }

            else {
              // no sibling slots open, look left of current
              current = current.leftChild;

              // console.log('looking left');
              break rightSiblingLoop;
            }

          }

        } else {
          current = current.leftChild;
        }

      }
      
    }

  }
};

module.exports = Pyramid;