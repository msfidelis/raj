# Raj - Toolset DANGER! [![Build Status](https://travis-ci.org/msfidelis/raj.svg?branch=master)](https://travis-ci.org/msfidelis/raj) [![Coverage Status](https://coveralls.io/repos/github/msfidelis/raj/badge.svg?branch=master)](https://coveralls.io/github/msfidelis/raj?branch=master)

My toolset of day a day, in a simple library. 

# UNDER F*CKING CONSTRUCTION!!!


Made with love :heart:


![Dancing](https://media.giphy.com/media/T6S6dSvPpkp1e/giphy.gif)


# Indian Installation 

```bash
npm install --save raj-tools
```

# Arrays Indian Helpers

### Difference between 2 arrays 

```javascript
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const diff = raj.diff(array1, array2);

console.log(diff);

// [ 1, 2, 5, 6 ]
```

### Difference between base array and comparator array

```javascript
const arrayBase = [1, 2, 3, 4];
const arrayComparator = [3, 4, 5, 6];

const diff = raj.diffBase(arrayBase, arrayComparator)

console.log(diff);

// [ 1, 2 ]

```

### Common itens between Arrays

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6];

const common = raj.common(arr1, arr2);

console.log(common);

// [ 4 ]
```

### Array Sum

```javascript
const array = [5, 5, 10, 30];

const sum = raj.sumArray(array);

console.log(sum);

// 50
```

### Random Item in Array 

```javascript
const array = [5, 5, 10, 30];

const rand = raj.randItem(array);

console.log(rand);

// 5...
```

### Split arrays on x arrays 

> This sh*t save my life on batch parallel processing

```javascript
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const numberOfItems = 5;

const batch = raj.split(array, numberOfItems);

console.log(batch);

// [ [ 1, 2, 3, 4, 5 ],
//  [ 6, 7, 8, 9, 10 ],
//  [ 11, 12, 13, 14, 15 ],
//  [ 16, 17 ] ]
```

### Split arrays by determinate object key item

> This shit save my life in parallel processing 

```javascript

const expendables = [
    {queue: "a", data: "Barney Ross"},
    {queue: "a", data: "Lee Christmas"},
    {queue: "b", data: "Yin Yang"},
    {queue: "c", data: "Gunnar Jensen"},
    {queue: "c", data: "Paine"}
];

const queues = raj.plop(expendables, 'queue');

console.log(queues);

// { 
//     a: [ { queue: 'a', data: 'Barney Ross' },
//      { queue: 'a', data: 'Lee Christmas' }],
//     b: [ { queue: 'b', data: 'Yin Yang' } ],
//     c: [ { queue: 'c', data: 'Gunnar Jensen' },
//      { queue: 'c', data: 'Paine' } ] 
// }

``` 

# Math Indian Helpers

> Coming soon...

# Objects Indian Helpers

### Select from object
```javascript
const object = {
    name: 'hello',
    id: 3123423,
    lorem: 'ipsum',
    music: 'hello darkness my old friend',
    raj: 'http://awesome'
}

raj.selectFromObject(object, ['name', 'id']) // {name: 'hello', id: 3123423}
```

### Copy Objects

```javascript
const obj = {a: 'b', c: 'd'};
const copy = raj.copy(obj);
```

### Merge Objects

```javascript
const object1 =  { food: 'pizza', car: 'ford' };
const object2 =  { animal: 'dog' };

const object3 = raj.merge(object1, object2);

console.log(object3);

// { food: 'pizza', car: 'ford', animal: 'dog' }
```


### Extend objects values

```javascript
const defaultValues = { host: "127.0.0.1", port: "6379", database: "default"};
const connectionValus = { host: "54.178.12.44", database: "raj"};

const newobject = raj.extend(defaultValues, connectionValus);

console.log(newobject)

// { host: '54.178.12.44', port: '6379', database: 'raj' }
```

### Clean Objects (empty and undefined values)


```javascript
const objectReference = {a: undefined, b: "", c: "value"};
const objectToTest = {c: "value"};
const cleanObject = raj.cleanObject(objectReference);

console.log(cleanObject); 

// {c: 'value'}
```

# Validation Indian Helpers

### Is string 

```javascript
const result = raj.isString('hello');

const string = 'hello'
const number = 12321

raj.isString(string); // true
raj.isString(number); // false
```

### Is Object 

```javascript
const string = 'hello';
const object = {a:1};

raj.isObject(string); // false
raj.isObject(object); // true
```

### Is Number 

```javascript
const string = 'hello'
const number = 12321

raj.isNumber(string); // false
raj.isNumber(number); // true
```

### Is Array 

```javascript
const string = "Hello";

const object = {
    hello: "value"
};

const array = [1, 2, 3];

raj.isArray(string); //false
raj.isArray(object); //false
raj.isArray(array); //true
```
