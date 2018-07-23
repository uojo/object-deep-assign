# object-deep-assign


## Install
To install from npm:
```
npm install --save object-deep-assign
```

## Usage
For Node.js:
```javascript
var deepMap = require('object-deep-assign');
var data = {
  a: 1,
  b: {
    c: 3,
    d: [
      {id: 1, name: 'apple'},
      {id: 2, name: 'orange'}
    ]
  },
  e: ['hello', 100, null, undefined]
}

deepMap(data,(val, key, parent, tags) => {
  console.log(key, val)
})

// undefined { a: 1,
//   b: { c: 3, d: [ [Object], [Object] ] },
//   e: [ 'hello', 100, null, undefined ] }
// a 1
// b { c: 3,
//   d: [ { id: 1, name: 'apple' }, { id: 2, name: 'orange' } ] }
// c 3
// d [ { id: 1, name: 'apple' }, { id: 2, name: 'orange' } ]
// 0 { id: 1, name: 'apple' }
// id 1
// name apple
// 1 { id: 2, name: 'orange' }
// id 2
// name orange
// e [ 'hello', 100, null, undefined ]
// 0 'hello'
// 1 100
// 2 null
// 3 undefined
```


## ChangeLog
### 0.1.0
- 第一版本。
