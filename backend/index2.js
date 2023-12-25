const express = require("express");
const zod=require("zod");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
const myArr=[1,2,3,4,5,5];
const myschema=zod.array(zod.number());
const response=myschema.safeParse(myArr);
console.log(response.error);
app.post("/home", (req, res) => {
  //   const qp = req.query.q;
  //   console.log(qp);
  const id = req.body.id;
  const length = id[0].length;
  res.json({
    msg: "hey there " + length,
  });
});

//global catch=>when someting goes wrong with the input in routes...then that error is catched here.
app.use((err, req, res, next) => {
  res.json({
    msg: "Server issue",
  });
});
app.listen(port);
