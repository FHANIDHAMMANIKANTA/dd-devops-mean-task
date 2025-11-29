const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------
// MongoDB Connection
// ---------------------------
const db = require("./app/models");

// Use the Mongo URL from env OR fallback to docker container name
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://dd-mongo:27017/angular-15-crud";

db.mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit(1);
  });

// ---------------------------
// Routes
// ---------------------------
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/tutorial.routes")(app);


// ---------------------------
// Server Startup
// ---------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

