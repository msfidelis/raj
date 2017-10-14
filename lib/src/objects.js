'use strict'

module.exports = {
  selectFromObject: (current, keys) => {
    const object = {}
    keys.forEach(key => {
      object[key] = current[key]
    })
    return object
  }
}
