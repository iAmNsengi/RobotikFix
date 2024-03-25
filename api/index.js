const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "iTs %%a*S3CrE7";

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

mongoose.connect(
  "mongodb+srv://iamnsengi:" +
    encodeURIComponent("iNSE@2024$") +
    "@cluster0.jjw2fxo.mongodb.net",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    })
      .then(() => {
        res.status(201).json(userDoc);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username }); // Await the findOne call
    if (!userDoc) {
      return res.status(404).json({ message: "User Not Found" });
    }
    if (!bcrypt.compareSync(password, userDoc.password)) {
      return res.status(404).json({ message: "User Not Found" });
    }
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("OK");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
