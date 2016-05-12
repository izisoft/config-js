
var utils = require('./utils.js');

var t1 = __dirname + '/etc/t1.json';

describe('Config', function(){
	
	var config = utils.frequire('../index.js');
	
	describe('parse from file', function() {
		it('Should parse given public configuration file with default phase', function() {
			config = utils.frequire('../index.js');
			config.parse(t1);
			expect(config.a).to.equal(1);
			expect(config.b).to.equal(20);
			expect(config.c).to.equal(30);
		});
		
		it('Should parse given public configuration file with specified phase', function() {
			config = utils.frequire('../index.js');
			config.setPhase('prod').parse(t1);
			expect(config.a).to.equal(100);
			expect(config.b).to.equal(2);
			expect(config.c).to.equal(3);
		});
		
		it('Should parse given public configuration file with wrong specified phase', function() {
			config = utils.frequire('../index.js');
			config.setPhase('wrong_phase').parse(t1);
			expect(config.a).to.equal(1);
			expect(config.b).to.equal(2);
			expect(config.c).to.equal(3);
		});
		
	});
	
	describe('parse from object', function() {
		
	});
	
	describe('phase merging', function() {
		
	});
});