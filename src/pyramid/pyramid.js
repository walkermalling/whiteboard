'use strict';

var PyramidNode = require('./pyramid-node');

var Pyramid = function (data) {
  
  this.root = null;
  this.inserted = 0;
  this.paths = [];
  this.mappedPaths = [];

  if (data) generateFromArray(data)

};

Pyramid.prototype.generateFromArray = function (arr) {
  var data = arr;

  if (detectNested(data)){ 
    data = flatten(data);
  }

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
  } 

  else {
    // starting with root, find next slot
    var current = this.root;
    insertLoop: while (true) {

      // INSERT as LEFT child of current
      if (current.leftChild === null && current.rightChild === null) {
        newNode.rightParent = current;
        current.leftChild = newNode;
        this.inserted++;
        break insertLoop;
      } 
      
      // INSERT as RIGHT child of current
      else if (current.leftChild !== null && current.rightChild === null) {
        newNode.leftParent = current;
        current.rightChild = newNode;
        this.inserted++;

        // LINK RIGHT PARENT
        if (current.rightParent && current.rightParent.rightChild){
          newNode.rightParent = current.rightParent.rightChild;
          current.rightParent.rightChild.leftChild = newNode;
        } 

        else {
          newNode.rightParent = false;
        }

        break insertLoop;

      } 

      // check right SIBLINGS for slots
      else if (current.leftChild !== null && current.rightChild !== null) {
        var rightSibling = false;

        if (current.rightParent && current.rightParent.rightChild) {

          rightSibling = current.rightParent.rightChild;

          // LOOP
          rightSiblingLoop: while (true) {
            
            // INSERT as right sibling's right child
            if (rightSibling.rightChild === null) {
              newNode.leftParent = rightSibling;
              rightSibling.rightChild = newNode;
              this.inserted++;
              break insertLoop;
            }

            // if NEXT sibling, check next
            else if (!!rightSibling.rightParent && !!rightSibling.rightParent.rightChild){
              rightSibling = rightSibling.rightParent.rightChild;
            }

          }

        } 

        // if no sibling, advance CURRENT to left child
        else {
          current = current.leftChild;
        }

      }
      
    }

  }
};

Pyramid.prototype.tracePaths = function () {

  var pathsArray = [];

  function trace (node, path) {

    // recurse LEFT
    if (!!node.leftChild) {
      var updatedPath = path.concat([
        {'direction' : 'left', 'value' : node.data }
      ]);
      trace(node.leftChild, updatedPath);
    }

    // recurse RIGHT
    if (!!node.rightChild) {
      var updatedPath = path.concat([
        {'direction' : 'right', 'value' : node.data }
      ]);
      trace(node.rightChild, updatedPath);
    }

    // register complete PATH
    if (node.leftChild === null && node.rightChild === null) {
      pathsArray.push(path);
    }

  };

  // invoke
  trace(this.root, []);

  // cache
  this.paths = pathsArray;

};

Pyramid.prototype.smallestPath = function () {
  var mapped = this.paths.map(function (path) {
    var sum = 0;
    path.forEach(function (node) {
      sum += node.value;
    });
    return {
      'sum' : sum,
      'path' : path
    };
  });
  this.mappedPaths = mapped;
};

Pyramid.prototype.largestPath = function () {

};

module.exports = Pyramid;