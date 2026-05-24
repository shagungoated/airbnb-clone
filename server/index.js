require("dotenv").config();
const express=require("express");
const cors = require("cors");
const connectWithDB=require('./config/db');
const cloudinary = require("cloudinary").v2;
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
//connect with the database
connectWithDB();

//cloudinary configurations
cloudinary.config({ 
    cloud_name: 'dqktfz9vj', 
    api_key: '342294954962825', 
    api_secret: 'FTMdL6DpVR4L18l_hxMwCOodIo0' // Click 'View API Keys' above to copy your API secret
});

const app = express();
app.use(
    cookieParser());
app.use(
    (cookieSession({
        name: "session",
        maxAge:process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
        keys: [process.env.SESSION_SECRET],
        secure: true,
        sameSite: "none",
        httpOnly: true
    })
));
    app.use(express.json());

    app.use(
        cors({
            origin: process.env.CLIENT_URL,
            credentials: true,
        })
    );
app.use("/",require("./routes"));

app.listen(process.env.PORT || 8000, (err)=>{
    if (err){
        console.log("Error is there while connecting the server:",err);
    }
    console.log(`server is running onto the port no. ${process.env.PORT}`);
});
module.exports = app;

