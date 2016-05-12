
var utils = require('./utils.js');

var f1 = __dirname + '/etc/t1.json';

var o1 = {
		common: { a: 1, b: 2},
		dev: {a:10},
		prod: {b:20}
}

describe('Config', function(){
	
	var config = utils.frequire('../index.js');
	
	describe('parse from file', function() {
		it('Should parse given public configuration file with default phase', function() {
			config = utils.frequire('../index.js');
			config.parse(f1);
			expect(config.a).to.equal(1);
			expect(config.b).to.equal(20);
			expect(config.c).to.equal(30);
		});
		
		it('Should parse given public configuration file with specified phase', function() {
			config = utils.frequire('../index.js');
			config.setPhase('prod').parse(f1);
			expect(config.a).to.equal(100);
			expect(config.b).to.equal(2);
			expect(config.c).to.equal(3);
		});
		
		it('Should parse given public configuration file with wrong specified phase', function() {
			config = utils.frequire('../index.js');
			config.setPhase('wrong_phase').parse(f1);
			expect(config.a).to.equal(1);
			expect(config.b).to.equal(2);
			expect(config.c).to.equal(3);
		});
	});
	
	describe('parse from object', function() {
		it('Should parse given public configuration object', function() {
			config = utils.frequire('../index.js');
			config.setPhase('prod').parse(o1);
			expect(config.a).to.equal(1);
			expect(config.b).to.equal(20);
		});
	});
	
	describe('phase merging', function() {
		
	});
});