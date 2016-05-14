'use strict';

var _ = require('lodash');
var fs = require('fs');

/**
 * 
 */
module.exports = new Config();

/**
 * Main configuration container
 */
function Config() {
	this._args = require('minimist')(process.argv.slice(2));
}

/**
 * 
 * @param options
 * @returns {Config}
 */
Config.prototype.init = function(options) {
	options = options || {};
	options.default_phase = options.default_phase || 'dev';
	options.phase_arg = options.phase_arg || 'm';
	
	this._phase = this._args[options.phase_arg] || options.default_phase;

	return this;
}

/**
 * 
 * @param env
 * @returns {Config}
 */
Config.prototype.setPhase = function(phase) {
	this._phase = phase;
	return this;
}

function getJson(conf) {
	if(typeof conf === 'object') {
		return conf;
	} else if(typeof conf !== 'undefined') {
		return JSON.parse(fs.readFileSync(conf, {encoding: 'utf-8'}));
	} else {
		return {};
	}
}

/**
 * Parse given configurations.
 * 
 * @param {String|Object} public_conf
 * @param {String|Object} private_conf
 * @returns {Config}
 */
Config.prototype.parse = function(public_conf, private_conf) {
	var pub_json = getJson(public_conf);
	var priv_json = getJson(private_conf);
	
	if(typeof this._phase === 'undefined') {
		this.init(priv_json.options || pub_json.options);
	}

	_.assign(this, pub_json.common);
	_.merge(this, pub_json[this._phase] || {});
	_.merge(this, priv_json.common || {});
	_.merge(this, priv_json[this._phase] || {});
	
	return this;
} 
