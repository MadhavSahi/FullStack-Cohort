//MW for user

const { User } = require("../database/db");
const userMW = async (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const verifyUser = await User.findOne({
    username: username,
    password: password,
  });
  if (verifyUser) {
    next();
  } else {
    return res.status(403).json({
      msg: "User doesn't exist in DB.",
    });
  }
};

module.exports = userMW;
