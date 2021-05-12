const express = require("express");
require("./DB/mongoose");
const app = express();
app.use(express.json());
const path = require("path"); //
const publicDirectory = path.join(__dirname, "../client/build"); //
app.use(express.static(publicDirectory)); //

const dis_router = require("./ROUTES/distributors_endpoints");
app.use(dis_router);
const product_router = require("./ROUTES/products_endpoints");
app.use(product_router);
const admin_router = require("./ROUTES/admin_endpoints");
app.use('/api/admin',admin_router);


// const Distributor = require("./MODELS/distributor");
// const distributor = new Distributor({
//   name: "נעמה  כרמל",
//   title: "ניסיון",
//   area: "north",
//   city: "haifa",
//   phone: "0502244115"
// })

//  distributor.save().then(()=>{
//     console.log(distributor)
// }).catch((error) =>{
// console.log(error)
// })

// app.get("/api/distributors", async (req, res) => {
//   try {
//     const distributors = await Distributor.find({});
//     res.status(201).send(distributors);
//   } catch (e) {
//     res.status(400).send({ error: e.message });
//   }
// });



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(port);
});