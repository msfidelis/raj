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
    randItem: arrayHelpers.randItem,
    split: arrayHelpers.split,

    //Validations
    isString: validations.isString,
    isObject: validations.isObject,
    isNumber: validations.isNumber,
    isArray: validations.isArray,

    //Objects
    selectFromObject: objectHelpers.selectFromObject
};