const express = require("express");
const zod = require("zod");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://madhavsahi16:Dta7cKlJmv0ZXSx7@madhavsahi-cohort02.pxcwixs.mongodb.net/user_first_db"
);

const User = mongoose.model("user_db", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({
      msg: "User already exists",
    });
    //added return so that control will go out of this route after this statement..bcz we dont want to add
  }
  await User.create({
    name: username,
    email: email,
    password: password,
  });
  // const user = new User({
  //   name: username,
  //   email: email,
  //   password: password,
  // });
  // user.save();
  res.status(200).json({
    msg: "New user saved successfully.",
  });
});

app.listen(port);
