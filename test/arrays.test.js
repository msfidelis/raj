"use strict";

const raj = require("../lib/raj");

const expect = require("chai").expect;
const assert = require("chai").assert;

describe("#Arrays Test", () => {
    
    it("#raj.diff() - Difference between 2 arrays", () => {

        let arrayBase = [1, 2, 3, 4];
        let arrayComparator = [3, 4, 5, 6];

        let diff = raj.diff(arrayBase, arrayComparator); 
 
        expect(diff).to.be.an('array').and.to.deep.equal([1, 2, 5, 6]);

    });


    it("#raj.diffBase() - Difference a base array with comparator", () => {
        
        let arrayBase = [1, 2, 3, 4];
        let arrayComparator = [3, 4, 5, 6];

        let diff = raj.diffBase(arrayBase, arrayComparator); 
        
        expect(diff).to.be.an('array').and.to.deep.equal([1, 2]);
        
    });   


    it("#raj.common() - Common values between 2 arrays", () => {
        
        let arr1 = [1, 2, 3, 4];
        let arr2 = [4, 5, 6];

        let common = raj.common(arr1, arr2);
        
        expect(common).to.be.an('array').and.to.deep.equal([4]);
    });       


    it("#raj.sumArray() - sum array values", () => {
        
        let array = [5, 5, 10, 30];
        let sum = raj.sumArray(array);

        expect(sum).to.be.equal(50);
    });     
    
    
    it("#raj.randItem() - random item in array value", () => {
        
        let array = [5, 5, 10, 30];
        let rand = raj.randItem(array);

        expect(array).to.be.an('array').that.contains(rand);
    });    

});