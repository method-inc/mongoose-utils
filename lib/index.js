module.exports = {
  validate: require('./validators'),
  plugin: {
    timestamps: require('./plugins/timestamps'),
    uploads: require('./plugins/uploads')
  }
};