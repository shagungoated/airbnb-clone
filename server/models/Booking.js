const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        requird: true,
    },
    place:{
        type: mongoose.Schema.ObjectId,
        ref: "Place",
        requird: true,
    },
    checkIn: {
        type: Date,
        requird: true,
    },
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;