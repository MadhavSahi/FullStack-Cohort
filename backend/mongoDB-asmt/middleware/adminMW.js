//MW for Admin
const { Admin } = require("../database/db");
const adminMW = async (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const verifyUser = await Admin.findOne({
    username: username,
    password: password,
  });
  if (verifyUser) {
    next();
  } else {
    return res.status(403).json({
      msg: "This user doesn't have Admin Access.",
    });
  }
};

module.exports = adminMW;
