'use strict';

var utils = require('./utils.js');
var frequire = utils.frequire;

describe('Config', function(){
	var config = frequire('../index.js', ['-p', '13000']);
		
	it('Should be created with default values', function() {
		expect(config._phase).to.be.an('undefined');
		expect(config._args).to.deep.equal({'_':[], 'p': 13000});
	});
	
	describe('#setPhase()', function() {
		it('Should update _env propery of config object', function() {
			config.setPhase('fakeEnv');
			expect(config._phase).to.equal('fakeEnv');
			config.setPhase('differentEnv');
			expect(config._phase).to.equal('differentEnv');
		});
		
	});
	
	describe('#init()', function() {
		it('Should initialize object to default values when no options given', function() {
			config.init();
			expect(config._phase).to.equal('dev');
		});
		it('Should use given options if provided', function() {
			config.init({
				default_phase: 'myTest'
			});
			expect(config._phase).to.equal('myTest');
		});
	});	
});