import express from "express"
import cors from "cors"
import { sampleFood, sampleTags, sampleUsers } from "./data"
import jwt from "jsonwebtoken"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import connectDB from "./config/database.config"

dotenv.config({
    path:"./config/config.env"
})
const app = express()
app.use(cors({
    origin:["http://localhost:4200"],
    credentials:true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
connectDB() 

  // importing routes 
  import FoodRoutes from "./routes/food.routes"
  import UserRoutes from "./routes/user.routes"
  app.use("/api/v1",FoodRoutes)
  app.use("/api/v1",UserRoutes)

app.listen(5000,()=>{
    console.log("Server is running on Port "+5000);
    
})