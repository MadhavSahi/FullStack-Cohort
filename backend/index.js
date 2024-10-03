const express=require("express");
const bodyParser=require("body-parser");

const app=express();

const port=3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/home",(req,res)=>{
    //any logic specific thing we can do here...
    console.log(req.body);
    res.status(200).json({
        text:"Hi madhav sahi",
    });
});

app.listen(port);
//this is basic backend server
