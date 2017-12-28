'use strict';
var recoo = require('recoo');

module.exports = {
  creditCard: recoo('(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})'),
  ssn: recoo('([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})*'),
  slug: recoo('[a-z0-9-]+'),
  alphaNumeric: recoo('[a-zA-Z0-9]+'),
  number: recoo('[0-9]+'),
  basicAuth: recoo('\S+\:\S+'),
  html: recoo('<([a-z]+) *[^/]*?>')
}
