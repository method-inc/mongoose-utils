var mongoose = require('mongoose');

module.exports = function UploadsPlugin (schema, options) {

  if (typeof options.directory != 'string') throw new Error("Mongoose-Utils: Directory option required to use uploads plugin.");

  var File = require('../schemas/file');

  var file_prop = options.name || 'attachment',
      prop_object = {};

  prop_object[file_prop] = [File];
  schema.add(prop_object);
};