'use-strict'

var XRegExp = require('xregexp')

var re = new XRegExp('((\\p{Ll})(\\p{Lu})|(\\d)(\\p{Lu})|(\\p{Ll})(\\d))', 'g')

function replace () {
  var lhs = arguments[2] || arguments[4] || arguments[6]
  var rhs = arguments[3] || arguments[5] || arguments[7]

  return lhs + '-' + rhs
}

module.exports = function kebabify (text) {
  return text.replace(re, replace).replace(re, replace).toLowerCase()
}
