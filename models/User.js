const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.methods.compare = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
