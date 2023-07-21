// const express = require("express");
// const cors = require("cors");
// const app = express();

// require("./utils/database.js");
// const userRoutes = require("./routes/userRoutes");

// app.use(express.json());
// app.use("/api", userRoutes);

// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const app = express();

require("./utils/database.js");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const adminRoutes = require("./routes/adminRoutes")
const bookingRoutes = require("./routes/booking")
var ratingRoutes = require("./routes/ratingRoutes");


const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", serviceRoutes);
app.use("/", userRoutes);
app.use("/admin",adminRoutes)
app.use("/booking",bookingRoutes)
app.use("/rating", ratingRoutes);


const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
