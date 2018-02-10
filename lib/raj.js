'use strict';

const arrayHelpers = require('./src/arrays');
const validations = require('./src/validations');
const objectHelpers = require('./src/objects');

module.exports = {

    //Array 
    diff: arrayHelpers.diff,
    diffBase: arrayHelpers.diffBase,
    common: arrayHelpers.common,
    sumArray: arrayHelpers.sumArray,
    randomItem: arrayHelpers.randomItem,
    split: arrayHelpers.split,
    plop: arrayHelpers.plop,

    //Validations
    isString: validations.isString,
    isObject: validations.isObject,
    isNumber: validations.isNumber,
    isArray: validations.isArray,
    isNaN: validations.isNaN,

    //Objects
    selectFromObject: objectHelpers.selectFromObject,
    extend: objectHelpers.extend,
    merge: objectHelpers.merge,
    copy: objectHelpers.copy
};