const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
}).then(console.log("Conneted to mongoDb"))
.catch((err)=> console.log(err));

//This will take out file and store in our images folder dest.
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images");
    },filename:(req, file, cb)=>{
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage})
app.use("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", ()=>{
    console.log("Backend is running.");
});









// const http = require("http")

// const server = http.createServer((req, res)=>{
//     res.write("This is the reason from the server")
//     res.end();
// })

// server.listen((2000), ()=>{
//     console.log("Node.js is currently active and listening on port: 2000");
// })

// const mongoose = require('mongoose');
// let url = "mongodb+srv://rohit20:mongoRA12@cluster0.qlail4h.mongodb.net/sampleDB?retryWrites=true&w=majority"
// mongoose.connect(url);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function callback(){
//     console.log("Database connected successfully");
// });