const express = require("express");
const router = express.Router();
const zod = require("zod");
const userMW = require("../middleware/userMW");
const { User, Course } = require("../database/db");
const adminMW = require("../middleware/adminMW");

//to sign up a new user
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const isAlreadyUser = await User.findOne({
      username: username,
      password: password,
    });
    if (isAlreadyUser) {
      return res.status(403).json({
        msg: "This username already exist in User DB.",
      });
    } else {
      await User.create({
        username: username,
        password: password,
      });
      return res.status(201).json({
        msg: "New User created successfully.",
      });
    }
  } catch (error) {
    console.error("Error during this MongoDB operation:", error);
  }
});

//if any user also has admin access, then he can add courses as well..otherwise MW won't allow user to post any course
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

// to see all courses on user screen.
router.get("/courses", userMW, async (req, res) => {
  try {
    const allCourses = await Course.find({});
    // const allCourses2 = await allCourses.toArray();
    return res.status(200).json({
      msg: "All Courses : ",
      courses: allCourses,
    });
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});

router.post("/courses/:courseId", userMW, async (req, res) => {
  try {
    const courseId = req.params.courseId;
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});

router.get("purchasedCourses", userMW, async (req, res) => {
  const username = req.headers.username;
  try {
    const purchasedCoures = await User.findOne(
      {
        username: username,
      },
      {}
    );
    return res.status(200).send({
      msg: "User's purchased courses :- ",
      purchasedCoures,
    });
  } catch (error) {
    console.error("Error during MongoDB operation:", error);
  }
});

module.exports = router;
