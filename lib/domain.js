'use strict';
var recoo = require('recoo');

module.exports = recoo('((?=[a-z0-9-]{1,63}\\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,6}');
