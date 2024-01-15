const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://madhavsahi16:Dta7cKlJmv0ZXSx7@madhavsahi-cohort02.pxcwixs.mongodb.net/user_second_db"
);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  //when we want to add some other table inside aother table, we use thi syntax...like we want to have a PurchasedCourse table, but dont want to make different table bcz we think that we can interlink it through other tables, then we can use the below syntax to have it.
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink:String,
  price: Number,
});
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
