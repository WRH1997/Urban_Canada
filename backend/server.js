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
var logger = require("morgan");

const cors = require("cors");
const app = express();

require("./utils/database.js");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/booking");
const ratingRoutes = require("./routes/ratingRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const wishlistRoutes = require("./routes/wishlistRoutes.js");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", serviceRoutes);
app.use("/", userRoutes);
app.use("/admin", adminRoutes);
app.use("/booking", bookingRoutes);
app.use("/rating", ratingRoutes);
app.use("/notifications", notificationRoutes);

app.use("/wishlist", wishlistRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
