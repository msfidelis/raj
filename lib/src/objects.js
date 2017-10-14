'use strict';

module.exports = {
  selectFromObject: (current, keys) => { let obj = {}; keys.map(key => { obj[key] = current[key];}); return obj; }
};
