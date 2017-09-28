'use strict';

const arrayHelpers = require('./src/arrays');
const stringHelpers = require('./src/strings');

module.exports = {
    diff : arrayHelpers.diff,
    diffBase: arrayHelpers.diffBase,
    common: arrayHelpers.common,
    sumArray: arrayHelpers.sumArray,
    randItem: arrayHelpers.randItem,
    split: arrayHelpers.split,
    isString: stringHelpers.isString
};