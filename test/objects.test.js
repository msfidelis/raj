'use strict'

const raj = require("../lib/raj");

const expect = require("chai").expect;

describe("#Objects Test", () => {

  it("#raj.selectFromObject", () => {

    const object = {
      name: 'hello',
      id: 3123423,
      lorem: 'ipsum',
      music: 'hello darkness my old friend',
      raj: 'http://awesome'
    };

    expect(raj.selectFromObject(object, ['name', 'id'])).to.deep.equal({name: 'hello', id: 3123423});
  });

  it("#raj.extend", () => {

    const expectedValues = { host: '54.178.12.44', port: '6379', database: 'raj' };
  
    let defaultValues = { host: "127.0.0.1", port: "6379", database: "default"};
    let connectionValus = { host: "54.178.12.44", database: "raj"};

    let newObject = raj.extend(defaultValues, connectionValus);
    expect(newObject).to.be.an('object').to.deep.equal(expectedValues);
            
  });


  it("#raj.copy", () => {
    
    const obj = {a: 'b', c: 'd'};
    const copy = raj.copy(obj);

    expect(obj).to.be.an('object').to.deep.equal(copy);

    obj.e = "f";
    expect(obj).to.be.an('object').to.not.be.equal(copy);
                
  });


  it("#raj.merge", () => {

    const objectReference = { food: 'pizza', car: 'ford', animal: 'dog' };
    
    const object1 =  { food: 'pizza', car: 'ford' };
    const object2 =  { animal: 'dog' };

    const object3 = raj.merge(object1, object2);

    expect(object3).to.be.an('object').to.deep.equal(objectReference);
                    
  });

});