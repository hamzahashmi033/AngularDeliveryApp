import expressAsyncHandler from "express-async-handler";
import { sampleUsers } from "../data";
import { User, UserModel } from "../models/user.model";
import jwt from "jsonwebtoken"

export const seedUser = expressAsyncHandler(async(req,res)=>{
    let Users = await UserModel.countDocuments()
    if (Users > 0) {
        res.send("Users is already seed")
        return
    }else{
          await UserModel.create(sampleUsers)
        res.send("seeding is done!")
    }
})
export const loginUser =expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await UserModel.findOne({email,password})
    if (user) {
        res.send(generateTokenReponse(user))
    }else{
        res.status(400).send("Credentials are not valid")
    }
})
const generateTokenReponse = (user : User) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },process.env.JWT_SECRET!,{
      expiresIn:"30d"
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
  }