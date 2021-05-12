const { Admin } = require("../MODELS/admin");

const createAdmin = async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);

    await newAdmin.save();
    const token = await newAdmin.generateAuthToken();

    res.status(201).send({ newAdmin, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

const login = async (req, res) => {
  try {
    const admin = await Admin.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await admin.generateAuthToken();
    res.send({ admin, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const logout = async (req, res) => {
  try {
    req.admin.tokens = req.admin.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.admin.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

const getAdminLoggedIn = async (req, res) => {
  try {
    const admin = await Admin.findOne({ _id: req.admin._id })

    res.status(200).send(admin.games);
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = {
  createAdmin,
  login,
  logout,
  getAdminLoggedIn,
};