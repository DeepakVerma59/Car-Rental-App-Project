const express = require("express");
const { requireSignin, isAdmin } = require("../middlewares/authMiddleware");
const formidable = require("express-formidable")
const route = express.Router();
const {createProductController,updateProductController,getProductController,getPhotoController,deleteProductController,getSingleProductController} = require("../controllers/productController")


//create product
route.post("/create-product",requireSignin,isAdmin,formidable(),createProductController);

//update product
route.put("/update-product/:pid",requireSignin,isAdmin,formidable(),updateProductController);

//get products
route.get("/get-product",getProductController);


//get-single-product && product details
route.get("/get-product/:id",getSingleProductController);

//get-photo
route.get("/get-photo/:pid",getPhotoController);

//delete-product
route.delete("/delete-product/:id",requireSignin,isAdmin,deleteProductController)

module.exports = route