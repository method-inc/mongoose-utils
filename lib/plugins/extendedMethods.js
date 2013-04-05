module.exports = function ExtendedMethods (schema, options) {

  schema.pre('save', function (next) {
    if (!this.created_at) this.created_at = new Date();
    this.updated_at = new Date();
    next();
  });

  schema.statics.findByIdAndUpdateX = function(id, updates, callback) {
    this.findById(id, function(err, item) {
      if (err) return callback(err);
      if (!item) return callback(new Error("An item could not be found with that id."));

      Object.keys(updates).forEach(function(prop) {
        item[prop] = updates[prop];
      });

      item.save(callback);
    });
  };

  schema.statics.findByIdAndRemoveX = function(id, callback) {
    this.findById(id, function(err, item) {
      if (err) return callback(err);
      if (!item) return callback(new Error("An item could not be found with that id."));

      item.remove(callback);
    });
  };

};