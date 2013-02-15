var mongoose = require('mongoose');

module.exports = function() {

  var File = new mongoose.Schema({
    name      : { type: String },
    path      : { type: String },
    type      : { type: String },
    size      : { type: Number }
  });

  File.plugin(require('../plugins/timestamps'));

  File.pre("save", function(next) {

    // only run on new file
    if(!this.isNew) return next();

    var uploadsDir = options.dir;
    fs.mkdirSync(uploadsDir+'/'+file._id);
    var dest = uploadsDir+'/'+file._id+'/'+file.name;

    fs.createReadStream(file.path).pipe(fs.createWriteStream(dest));

    fs.readFile(file.path, function (err, data) {
      fs.writeFile(dest, data, function (err) {

        file.path = file._id+'/'+file.name;
        return next(err);
      });
    });
  });

  return File;

};