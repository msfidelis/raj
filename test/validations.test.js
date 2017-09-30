"use strict";

const raj = require("../lib/raj");

const expect = require("chai").expect;

describe("#Validations Test", () => {
    it("#raj.isString()", () => {
        const string = "Hello";
        const number = 123;
        const object = {
            hello: "value"
        };

        expect(raj.isString(string)).to.be.true;
        expect(raj.isString(number)).to.be.false;
        expect(raj.isString(object)).to.be.false;
    });

    it("#raj.isObject()", () => {

        const string = "Hello";
        const number = 123;

        const object = {
            hello: "value"
        };

        expect(raj.isObject(string)).to.be.false;
        expect(raj.isObject(number)).to.be.false;
        expect(raj.isObject(object)).to.be.true;
    });


    it("#raj.isNumber()", () => {

        const string = "Hello";
        const number = 123;

        const object = {
            hello: "value"
        };

        expect(raj.isNumber(string)).to.be.false;
        expect(raj.isNumber(object)).to.be.false;
        expect(raj.isNumber(number)).to.be.true;
    });


    it("#raj.isArray()", () => {

        const string = "Hello";
        const number = 123;

        const object = {
            hello: "value"
        };

        const array = [1, 2, 3];

        expect(raj.isArray(string)).to.be.false;
        expect(raj.isArray(object)).to.be.false;
        expect(raj.isArray(number)).to.be.false;
        expect(raj.isArray(array)).to.be.true;
    });
});