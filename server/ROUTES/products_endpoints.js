const Product = require("../MODELS/product");
const express = require("express");
const router = express.Router();

// const app = express();
const cors = require('cors')
router.use(cors())


//getting all Product
router.get("/api/products", async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(201).send(products);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  
  //get Product by ID - 
  router.get("/api/products/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const product = await Product.findById(_id);
      res.status(201).send(product);
    } catch (e) {
      res.status(400).send("product not found");
    }
  });
  
  
  //adding new product - 
  router.post("/api/products", async (req, res) => {
  
    const product = new Product(req.body)
    try {
      await product.save();
      res.status(201).send(product);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  //edit one 
  router.put("/api/edit/product/:id", async (req, res) => {
    // const { deposit } = req.body;
    const _id = req.params.id;
    // const account = await Account.findById(_id);
    // console.log(_id);
  
    try {
      const product = await Product.findByIdAndUpdate(
        _id,
        // { $inc: { cash: deposit } },
        {
          runValidators: true,
          new: true,
          useFindAndModify: false,
        }
      );
      res.status(201).send(product);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  
  //delete 
  router.delete("/api/delete/product/:id", async (req, res) => {
    const _id = req.params.id;
    console.log("_id")
  
    try {
      const product = await Product.findByIdAndDelete(_id)
      res.status(201).send(product);
    } catch (e) {
      res.status(400).send("{ error: e.message }");
    }
  });
  


module.exports = router;
