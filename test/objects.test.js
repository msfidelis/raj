'use strict'

const raj = require("../lib/raj")

const expect = require("chai").expect

describe("#Objects Test", () => {

  it("#raj.selectFromObject", () => {

    const object = {
      name: 'hello',
      id: 3123423,
      lorem: 'ipsum',
      music: 'hello darkness my old friend',
      raj: 'http://awesome'
    }

    expect(raj.selectFromObject(object, ['name', 'id'])).to.deep.equal({name: 'hello', id: 3123423})
  })

})