const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const UserSchema = new Schema({
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
});

UserSchema.pre("save", function (next) {
  var user = this;
  bcrypt
    .hash(user.password, saltRounds)
    .then(function (hash) {
      user.password = hash;
      next();
    })
    .catch(function (err) {
     return next(err);
    });
});

UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", UserSchema);
