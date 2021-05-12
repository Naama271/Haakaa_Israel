const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value))
        throw new Error(`${value} is not a valid email`);
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.length < 4) {
        throw new Error("Password must contain at least 4 characters");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});


AdminSchema.methods.toJSON = function () {
  const admin = this;
  const adminObject = admin.toObject();

  delete adminObject.password;
  delete adminObject.tokens;

  return adminObject;
};

AdminSchema.methods.generateAuthToken = async function () {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, "haakaa");

  admin.tokens = admin.tokens.concat({ token });
  await admin.save();

  return token;
};

AdminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return admin;
};

// Hash the plain text password before saving
AdminSchema.pre("save", async function (next) {
  const admin = this;

  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});

const Admin = mongoose.model("User", AdminSchema);

module.exports = {
  Admin,
};