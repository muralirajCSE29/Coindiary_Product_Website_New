const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/coindiary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error MongoDB is not connected:", error);
  });


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    // unique : true,
  },
  password: {
    type: String,
    required: true,
  },
  
});


const collection = mongoose.model("collection", userSchema);

module.exports = collection;