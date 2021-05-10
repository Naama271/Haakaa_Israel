const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://naama:8tlZMzADuam0wi2I@cluster0.di2zf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));




// mongoose.connect('mongodb+srv://naama:naama271@cluster0.di2zf.mongodb.net/test', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
