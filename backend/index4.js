const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://madhavsahi16:Dta7cKlJmv0ZXSx7@madhavsahi-cohort02.pxcwixs.mongodb.net/user_first_db")
//in the end we need to give database name :- user_first_db
// mongoose.connect("mongodb+srv://madhavsahi16:Dta7cKlJmv0ZXSx7@madhavsahi-cohort02.pxcwixs.mongodb.net/")

const User=mongoose.model('table_01',{username:String,email:String,password:String});
//Users or table_01 is table name

const user_01=new User({
    username:"Hey5",
    email:"hey1@gmail.com",
    password:"hey1",
})
const user_02=new User({
    username:"Hey2",
    email:"hey2@gmail.com",
    password:"hey2",
})
const user_03=new User({
    username:"Hey3",
    email:"hey3@gmail.com",
    password:"hey3",
})
user_01.save();
user_02.save();
user_03.save();
//evertime we r stopping and starting the server...all the entries are being added again in the table...hence multiple entries are being added.
