const express = require("express");
const { requireSignin, isAdmin } = require("../middlewares/authMiddleware");
const formidable = require("express-formidable")
const route = express.Router();
const {createBookingController,updateBookingController,getBookingController,deleteBookingController} = require("../controllers/bookingController")


//create product
route.post("/create-booking",requireSignin,formidable(),createBookingController);

//update product
route.put("/update-booking/:pid",requireSignin,formidable(),updateBookingController);

//get products
route.get("/get-booking",getBookingController);

//get-single-product && product detail

//delete-product
route.delete("/delete-booking/:id",requireSignin,deleteBookingController)

module.exports = route