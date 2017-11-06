'use strict';

module.exports = {
  selectFromObject: (current, keys) => { let obj = {}; keys.map(key => { obj[key] = current[key];}); return obj; },
  copy: (obj) => console.log(obj),
  merge: (base, ref) => console.log(base, ref),
  extend: (def, obj) => { let newObj = Object.assign({}, def); for (var i in obj) { newObj[i] = obj[i];} return newObj;
  }
};
