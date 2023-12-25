const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
const PORT=3000;
app.use(express.json());
const jwtPassword="1234";
const ALL_USERS=[
    {
        username:"Hey1",
        password:"1234"
    },
    {
        username:"Hey2",
        password:"1234"
    },
    {
        username:"Hey3",
        password:"1234"
    }
]
function userExists(x,y){
    for(i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username===x && ALL_USERS[i].password===y){
            return true;
        }
    }
    return false;
}
app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    // const userExists=userExists(username,password);
    if(userExists(username,password)){
        let JWT_TOKEN=jwt.sign({username:username},jwtPassword);
        return res.status(200).json({
            token:JWT_TOKEN
        })
    }
    else{
        return res.status(403).json({
            msg:"User doesn't exist"
        })
    }
})
app.listen(PORT);