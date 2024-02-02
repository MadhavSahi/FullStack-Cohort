const express = require("express");
const router = express.Router();
const zod = require("zod");
const adminMW = require("../middleware/adminMW");
const { Admin, Course } = require("../database/db");

//to signup a new admin
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const isAlreadyUser = await Admin.findOne({
      username: username,
      password: password,
    });
    if (isAlreadyUser) {
      return res.status(403).json({
        msg: "Admin with this username already exist in Admin DB.",
      });
    } else {
      await Admin.create({
        username: username,
        password: password,
      });
      return res.status(201).json({
        msg: "New Admin created successfully.",
      });
    }
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});

//to post a new course only by admin
router.post("/courses", adminMW, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  try {
    const alreadyCourse = await Course.findOne({
      title: title,
    });
    if (alreadyCourse) {
      return res.json({
        msg: "This course already exists.",
      });
    } else {
      const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price,
      });
      return res.status(200).json({
        msg: "Course added successfully.",
        courseId: newCourse._id,
      });
    }
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});

//to see all courses on screen
router.get("/courses", adminMW, async (req, res) => {
  try {
    await Course.find({});
    return res.status(200).json({
      msg: "All courses : ",
    });
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});
module.exports = router;
