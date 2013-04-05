module.exports = {
  validate: require('./validators'),
  plugin: {
    timestamps: require('./plugins/timestamps'),
    extendedMethods: require('./plugins/extendedMethods')
    // uploads: require('./plugins/uploads')
  }
};