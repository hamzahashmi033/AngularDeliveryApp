import express from "express"
import cors from "cors"
import { sampleFood, sampleTags, sampleUsers } from "./data"
import jwt from "jsonwebtoken"
import bodyParser from "body-parser"
const app = express()
app.use(cors({
    origin:["http://localhost:4200"],
    credentials:true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/api/foods",(req,res)=>{
    res.send(sampleFood)
})
app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm  = req.params.searchTerm;
    const foods = sampleFood
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(foods);
  })
  
  app.get("/api/foods/tags", (req, res) => {
    res.send(sampleTags);
  })
  
  app.get("/api/foods/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = sampleFood
    .filter(food => food.tags?.includes(tagName));
    res.send(foods);
  })
  
  app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sampleFood.find(food => food.id == foodId);
    res.send(food);
  })
  app.post("/api/user/login",(req,res)=>{
    const {email,password} = req.body
    console.log(email,password);
    
    const user = sampleUsers.find(user => user.email === email 
      && user.password === password);
    if(user) {
     res.json(generateTokenReponse(user));  
     }
     else{
       const BAD_REQUEST = 400;
       res.status(BAD_REQUEST).send("Username or password is invalid!");
     }
  
  })
  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }
  

app.listen(5000,()=>{
    console.log("Server is running on Port "+5000);
    
})