'use strict';

module.exports = {
    isString: (object) => typeof object === 'string' || object instanceof String,
    isObject: (object) => typeof object === 'object' || object instanceof Object,
    isNumber: (object) => typeof object === 'number' || object instanceof Number,
    isArray: (object) => object instanceof Array
};