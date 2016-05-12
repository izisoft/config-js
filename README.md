# izi-config

Simple configuration management module for node.js projects.

## Installation

```
$ npm install izi-config
```

## Features

- Support detection of execution phase based on process arguments
- Support of patching common configuration with phase specific settings
- Possibility of patching public configuration with local one
- Configuration can be passed as path to json file or directly as an object 

## Examples

```node
var config = require('izi-config');
config.init({ phase_arg: 'm' }).parse('./config.json', './local.json');
```

```
node index.js -m prod
```
