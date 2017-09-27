'use strict';

module.exports = {
    diff: (array1, array2) => array1.filter(x => array2.indexOf(x) == -1).concat(array2.filter(x => array1.indexOf(x) == -1)),
    diffBase: (base, comparator) => base.filter(x => comparator.indexOf(x) == -1),
    common: (array1, array2) =>  array1.filter((x) => array2.includes(x)),
    sumArray: (array) => array.reduce((total, current) => total + current, 0)
};
