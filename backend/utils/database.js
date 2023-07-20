//const mongoose = require('mongoose');

//onst connectDB = async () => {
//  try {
  //  await mongoose.connect('mongodb+srv://darshil:darshil123@projectdb.48iq9bu.mongodb.net/', {
    //  useNewUrlParser: true,
      //useUnifiedTopology: true,
    //});
    //console.log('Connected to MongoDB!');
 // } catch (error) {
   // console.error('Error connecting to MongoDB:', error);
  //}
//};

//module.exports = connectDB;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
