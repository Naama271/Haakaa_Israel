const mongoose = require("mongoose");
// const ObjectId = require('mongodb').ObjectID;


const Distributor = mongoose.model("Distributor", {
   name: {
    type: String,
    required: true,
    validate(value) {
        if (value.length < 4) {
          throw new Error("must contain at least 4 letters");
        }
      },
  },
  title: {
    type: String,
    validate(value) {
        if (value.length < 3) {
          throw new Error("must contain at least 4 letters");
        }
      },
  },

  area: {
    type: String,
    required: true,
    validate(value) {
        if (value !== ("north"||"center"||"south")) {
          throw new Error("north or center or south");
        }
      },
  },

  city: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 3) {
        throw new Error("must contain at least 4 letters");
      }
      },
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
        const regex = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;
        if (!value.match(regex)) {
          throw new Error("must supply valid Israeli phone number");
        }
      },
  },

});

module.exports = Distributor;

// const Distributor1 = new Distributor({
//     name: 'נעמה  כרמל',
//     title: 'ניסיון',
//     area: 'north',
//     city: 'haifa',
//     phone: '0502244115',
  
//   });


//   Distributor1.save().then(()=>{
//     console.log(Distributor1)
// }).catch((error) =>{
// console.log(error)
// })