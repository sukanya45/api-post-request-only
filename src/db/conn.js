// connection

const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/MyFirstStudentAPI-sukanya-2")
    .then(() => { console.log("connection successfull..!") })
    .catch((err) => { console.log("no connection") });
