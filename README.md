# Mongoose Utils

A collection of mongoose validations, plugins, and utilities.

``` js
var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

var User = new mongoose.Schema({
  email         : { type: String, index: true, required:true, unique: true, validate: [utils.validate.email, 'not valid'] },
  password      : { type: String, trim: true, required:true, validate: [utils.validate.length(4), 'required to be at least 4 characters'] }
}, {strict:true});

// Plugins

User.plugin(utils.plugin.timestamps);
User.plugin(utils.plugin.extendedMethods);

```