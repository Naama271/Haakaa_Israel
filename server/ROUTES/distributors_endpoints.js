const Distributor = require("../MODELS/distributor");
// const Product = require("./MODELS/product");
const express = require("express");
const router = express.Router();
// const app = express();
const cors = require('cors')
router.use(cors())

const { auth } = require("../middleware/auth");


//getting all Distributor
router.get("/api/distributors", async (req, res) => {
    try {
      const distributors = await Distributor.find({});
      res.status(201).send(distributors);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  
  //get distributor by ID - 
  router.get("/api/distributors/:id", async (req, res) => {
    const _id = req.params.id;
    const user = await Distributor.findById(_id);
    res.send(user);
    throw new Error("user not found");
  });
  
  
  //adding new distributor - 
  router.post("/api/distributors", async (req, res) => {
  console.log(req.body)
    const distributor = new Distributor(req.body)
    try {
      await distributor.save();
      // sendWelcomeEmail(user.email , user.name)
      res.status(201).send(distributor);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  //edit one 
  router.put("/api/edit/distributor/:id", async (req, res) => {
     const { name, title, city, phone , area} = req.body;
    const _id = req.params.id;
  
    console.log( name, title, city, phone , area);

    const distributor = await Distributor.findOne({_id});
    console.log(distributor);

    try {
      distributor.name = name? name: distributor.name;
      distributor.title = title? title: distributor.title;
      distributor.city = city? city: distributor.city;
      distributor.phone = phone? phone: distributor.phone;
      distributor.area = area? area: distributor.area;
      
      await distributor.save();

      res.status(201).send(distributor);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  //delete 
  router.delete("/api/delete/distributor/:id", async (req, res) => {
    const _id = req.params.id;
    console.log(_id)
  
    try {
      const distributor = await Distributor.findByIdAndDelete(_id)
      res.status(201).send(distributor);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
module.exports = router;
