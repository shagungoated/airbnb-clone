const mongoose = require("mongoose");
const connectWithDB=()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI)
    .then(console.log(`DB connected successfully`))
    .catch((err)=>{
        console.log(`DB is failed`);
        console.log(err);
        process.exit(1)
    });
};
module.exports = connectWithDB;