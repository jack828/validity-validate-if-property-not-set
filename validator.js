module.exports = function validateIfPropertySet(property, validator) {
  if (!property) {
    throw new Error('No property to check provided')
  }

  if (!validator || typeof validator !== 'function') {
    throw new Error('No validator function provided')
  }

  return function (key, msg, object, callback) {
    if (object[property] !== false && !object[property]) {
      return validator(key, msg, object, callback)
    }

    return callback(null, undefined)
  }
}
