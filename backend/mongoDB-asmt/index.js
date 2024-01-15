const express = require("express");
// const router=express.Router();
const zod = require("zod");
const app = express();
const adminRouter = require("./routes/adminRoute");
const userRouter = require("./routes/userRoute");
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("APP is working on PORT number " + PORT);
});
