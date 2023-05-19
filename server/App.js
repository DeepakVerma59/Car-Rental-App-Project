require("dotenv").config();
require("./database/db")
const express = require("express");
const authRoutes = require("./routes/authRoutes")
<<<<<<< HEAD
const productRoutes= require("./routes/productRoutes")
const cors = require("cors")

=======
const productRoutes = require("./routes/productRoutes")
>>>>>>> 74d0ee89642475b399070f718a1d88e499da0927
const app = express();
const port = process.env.PORT
const cors = require("cors")


app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(productRoutes)

app.get("/",(req,res)=>{
res.send("hello folks")
})

app.listen(port,()=>{
    console.log(" server listening on port " + port)
})
