'use strict';

const arrayHelpers = require('./src/arrays');
const validations = require('./src/validations');

module.exports = {
    diff: arrayHelpers.diff,
    diffBase: arrayHelpers.diffBase,
    common: arrayHelpers.common,
    sumArray: arrayHelpers.sumArray,
    randItem: arrayHelpers.randItem,
    split: arrayHelpers.split,
    isString: validations.isString,
    isObject: validations.isObject,
    isNumber: validations.isNumber
};