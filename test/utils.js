'use strict';

global.chai = require('chai');
global.assert = chai.assert;
global.expect = chai.expect;

exports.frequire = function(module, args) {
	process.argv = ['node', module];
	if(typeof args !== 'Undefined') {
		process.argv = process.argv.concat(args);
	}
	return _frequire(module);
}

function _frequire(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}