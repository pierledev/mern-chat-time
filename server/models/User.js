import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minlegth: 2,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      minlength: 2,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      minlength: 6,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'],
    },
    ava: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePasswords = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model('User', UserSchema);
