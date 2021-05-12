const express = require("express");
const { auth } = require("../middleware/auth");
const adminController = require("../controller/admin");

const router = express.Router();

//create new admin
router.post("/", adminController.createAdmin); //permission to all v

//login admin
router.post("/login", adminController.login); //permission to all v

//login admin
router.post("/logout", auth, adminController.logout); //permission to admin logged in v

//get admin logged in
router.get("/me", auth, adminController.getAdminLoggedIn); //permission for admin logged in v

module.exports = router;