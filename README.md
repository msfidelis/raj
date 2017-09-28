# Raj - Toolset DANGER! [![Build Status](https://travis-ci.org/msfidelis/raj.svg?branch=master)](https://travis-ci.org/msfidelis/raj) [![Coverage Status](https://coveralls.io/repos/github/msfidelis/raj/badge.svg?branch=master)](https://coveralls.io/github/msfidelis/raj?branch=master)

My toolset of day a day, in a simple library. 

# UNDER F*CKING CONSTRUCTION!!!


Made with love :heart:


![Dancing](https://media.giphy.com/media/T6S6dSvPpkp1e/giphy.gif)


# Indian Installation 

```bash
npm install --save raj
```

# Arrays Indian Helpers

### Difference between 2 arrays 

```javascript
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let diff = raj.diff(array1, array2);

console.log(diff);

// [ 1, 2, 5, 6 ]
```

### Difference between base array and comparator array

```javascript
let arrayBase = [1, 2, 3, 4];
let arrayComparator = [3, 4, 5, 6];

let diff = raj.diffBase(arrayBase, arrayComparator)

console.log(diff);

// [ 1, 2 ]

```

### Common itens between Arrays

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6];

let common = raj.common(arr1, arr2);

console.log(common);

// [ 4 ]
```

### Array Sum

```javascript
let array = [5, 5, 10, 30];

let sum = raj.sumArray(array);

console.log(sum);

// 50
```

### Random Item in Array 

```javascript
let array = [5, 5, 10, 30];

let rand = raj.randItem(array);

console.log(rand);

// 5...
```

### Split arrays on x arrays 

> This sh*t save my life on batch parallel processing

```javascript
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let numberOfItems = 5;

let batch = raj.split(array, numberOfItems);

console.log(batch);

// [ [ 1, 2, 3, 4, 5 ],
//  [ 6, 7, 8, 9, 10 ],
//  [ 11, 12, 13, 14, 15 ],
//  [ 16, 17 ] ]
```

# Math Indian Helpers

> Coming soon...

# Objects Indian Helpers

> Coming soon...

# String Indian Helpers

### Is string 

```javascript
const result = raj.isString('hello');

const string = 'hello'
const number = 12321

raj.isString(string); // true
raj.isString(number); // false
```
