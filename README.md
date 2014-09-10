whiteboard
==========

Particularly Fun Whiteboard Problems and Solutions with Tests

### How (A)

1. `npm install`
2. make a link to the test you want to run: `ln src/stair-combo-test.js test/automocha`
3. run automocha `automocha`
4. fiddle withe the test to explore the solution

### How (B)

Each problem's solutions are packaged as node modules, and most are/will be designed to be explored in repl, so do seomthing like this:

```
$ node
$ > var StairCombo = require('./src/stair-combo/stair-combo')
$ > var x = new StairCombo()
$ > x.setStairs(5)
$ > x.setPeriod(3);
$ > x.recurse(x.stairs, x.period)
$ 13
```


