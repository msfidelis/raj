'use strict';

module.exports = {
  selectFromObject: (current, keys) => { let obj = {}; keys.map(key => { obj[key] = current[key];}); return obj; },
  copy: obj => Object.assign({}, obj),
  merge: (base, ref) => Object.assign({}, base, ref),
  extend: (def, obj) => { let newObj = Object.assign({}, def); for (var i in obj) { newObj[i] = obj[i];} return newObj;},
  cleanObject: obj => {Object.keys(obj).forEach(key => (obj[key] === undefined || obj[key] === "") && delete obj[key]); return obj}
};
