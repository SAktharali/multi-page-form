const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const path = require('path');
// const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config({path:path.join(__dirname,'config','config.env')}); 

const connectDb = require('./config/db');
connectDb();

const app = express();

// app.use(cookieParser());
app.use(express.json());
app.use(cors({
origin: 'http://localhost:5173',
methods:["GET","POST"],
credentials:true
}));

app.get('/api',(req,res)=>{
    res.send('api is working');
});

app.use('/api/v',userRoute);

const port = process.env.PORT || 7000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});