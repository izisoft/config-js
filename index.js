'use strict';

var _ = require('lodash');

/**
 * 
 */
module.exports = new Config();

function Config() {
	this._args = require('minimist')(process.argv.slice(2));
}

/**
 * 
 * @param options
 * @returns {Config}
 */
Config.prototype.init = function(options) {
	options.default_env = options.default_env || 'dev';
	options.env_arg = options.env_arg || 'e';
	
	this._env = this._args[options.env_arg] || options.default_env;

	return this;
}

/**
 * 
 * @param env
 * @returns {Config}
 */
Config.prototype.setEnv = function(env) {
	this._env = env;
	return this;
}

/**
 * 
 * @param public_conf
 * @param private_conf
 * @returns {Config}
 */
Config.prototype.parse = function(public_conf, private_conf) {
	if(typeof this._env === 'undefined') {
		this.init();
	}
	
	var pub = require(public_config);
	var priv = {};
	if(typeof private_conf !== 'undefined') {
		priv = require(private_conf);
	}
	
	var tmp = pub.common;
	_.merge(tmp, pub[this._env] || {});
	
	_.merge(tmp, priv.common || {});
	_.merge(tmp, priv[this._env] || {});
	
	_.assign(this, tmp);
	
	return this;
} 
