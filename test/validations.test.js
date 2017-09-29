"use strict";

const raj = require("../lib/raj");

const expect = require("chai").expect;

describe("#Validations Test", () => {

  it("#raj.isString", () => {

    const string = 'Hello'
    const number = 123
    const object = {
      hello: 'value'
    }

    expect(raj.isString(string)).to.be.true; 
    expect(raj.isString(number)).to.be.false; 
    expect(raj.isString(object)).to.be.false; 

  });

});