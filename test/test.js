'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

var frequire = require('./utils.js').frequire;


describe('Config', function(){
	var config = frequire('../index.js', ['-d', '13000']);
		
	describe('#setEnv()', function() {
		it('Should be undefined by default', function() {
			expect(config._env).to.be.an('undefined');
		});
		
		it('Should update _env propery of config object', function() {
			config.setEnv('fakeEnv');
			expect(config._env).to.equal('fakeEnv');
			config.setEnv('differentEnv');
			expect(config._env).to.equal('differentEnv');
		});
		
	});
	
	describe('#init()', function() {
		it('Should initialize object to default values when no options given', function() {
			config.init();
			expect(config._env).to.equal('dev');
		});
		it('Should use given options if provided', function() {
			config.init({
				default_env: 'myTest'
			});
			expect(config._env).to.equal('myTest');
		});
	});

	describe('#parse()', function() {
		it('Should parse given json files', function() {
			
		});
		it('Should parse given json object', function() {
			
		});
	});
	
});