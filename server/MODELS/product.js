const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID;


const Product = mongoose.model("Product", {
   title: {
    type: String,
    required: true,
    validate(value) {
        if (value.length < 4) {
          throw new Error("must contain at least 4 letters");
        }
      },
  },
  price: {
    type: Number,
    validate(value) {
        if (value < 0) {
          throw new Error("price must be positive number");
        }
      },
  },

  describe: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 10) {
        throw new Error("describe must contain at least 10 letters");
      }
    },
  },

  breastfeedsentence: {
    type: String,
    default: "breastfeedsentence 1",
    validate(value) {
      if (value.length < 3) {
        throw new Error("must contain at least 4 letters");
      }
      },
  },
  question: {
    type: String,
    default: "question",
    validate(value) {
      if (value.length < 3) {
        throw new Error("must contain at least 4 letters");
      }
      },
  },
  answer: {
    type: String,
    default: "answer",
    validate(value) {
      if (value.length < 3) {
        throw new Error("must contain at least 4 letters");
      }
      },
  },
  ins_clean: {
    type: String,
    default: "ins_clean",
    validate(value) {
      if (value.length < 3) {
        throw new Error("must contain at least 4 letters");
      }
      },
  },
  primarying: {
    type: String,
  },
  thumbimg: {
    type: Array,
  },
  video: {
    type: String,
  },


});

module.exports = Product;

// const product1 = new Product({
//     name: 'Roei Carmel',
//     email: 'roei@gmail.com',
//     phone: '0502244115',
//     acountId: '6081f5bbfadf08060cade970',
//   });


// product1.save().then(()=>{
//     console.log(user1)
// }).catch((error) =>{
// console.log(error)
// })