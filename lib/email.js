'use strict';
var recoo = require('recoo');

module.exports = recoo('[^\\.\\s@][^\\s@]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*');
