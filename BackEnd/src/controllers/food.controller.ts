import asyncHandler from "express-async-handler"
import { sampleFood } from "../data";
import { FoodModel } from "../models/food.model"
export const seedingFoods = asyncHandler(async (req, res) => {
    const foodCount = await FoodModel.countDocuments();
    if (foodCount > 0) {
        res.send("Seeding is already done!")
        return;
    } else {
        const foods = await FoodModel.create(sampleFood)
        res.send(foods)
    }
})

export const getAllFood = asyncHandler(async (req, res) => {
    const food = await FoodModel.find()
    res.send(food)
})

export const searchFoods = asyncHandler(async (req, res) => {
    const searchRegex = req.params.searchTerm
    console.log(searchRegex); 
    const foods = await FoodModel.find({ name: { $regex: searchRegex, $options: "i" } })
    res.send(foods);
})

export const getTags = asyncHandler(
    async (req, res) => {
      // const tags = await FoodModel.aggregate([
      //   {
      //     $unwind:'$tags'
      //   },
      //   {
      //     $group:{
      //       _id: '$tags',
      //       count: {$sum: 1}
      //     }
      //   },
      //   {
      //     $project:{
      //       _id: 0,
      //       name:'$_id',
      //       count: '$count'
      //     }
      //   }
      // ]).sort({count: -1});
      // distinct use for getting any field informaion from each documents
      // const tags = await FoodModel.distinct("name")
      // distinct with if condition (condition = grab the value of name from which the favorite filed is true)
      // const tags = await FoodModel.distinct("name",{'favorite':true})
      // count use for total value of a collection
      // const tags = await FoodModel.find().count()
      // count with if condition (condition = if stars with greater than 3 )
      // const tags = await FoodModel.find().count({'stars':{$lte : 3}})

      // $match works in aggregation it require a condition 
      // const tags = await FoodModel.aggregate([{$match:{'favorite':true}}])

      // $group works in aggregation it require a field from which you want to make a group and it will provide you that field in an object 
      // const tags = await FoodModel.aggregate([{$group:{_id:'$name'}}])
      // const tags = await FoodModel.aggregate([{$group:{_id:'$name',totalStars:{$sum:"$stars"}}}])
      // $group can work with many mathematical function like $sum,$avg and many more 
      // const tags = await FoodModel.aggregate([{$group:{_id:'$name',totalStars:{$avg:"$stars"}}}])
      // $group can also be used for grouping more than one feild
      // const tags = await FoodModel.aggregate([{$group:{_id:{name:"$name",stars:"$stars"}}}])
      
      // $skip and $sort are a operators in aggregation // skip() and sort() mongoose function are more better anyways
      // const tags = await FoodModel.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags",count:{$sum:1}}},{$project:{_id:0,name:"$_id",count:"$count"}}]).sort({count:1})
      //  alot more function has been done too. I will look at it if i needed to revise anything 
      const tags = await FoodModel.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags",count:{$sum:1}}},{$project:{_id:0,name:"$_id",count:"$count"}}]).sort({count:-1})
    
      const all = {
        name : 'All',
        count: await FoodModel.countDocuments()
      }
  
      tags.unshift(all);
      res.send(tags);
    }
  )
  export const getFoodByTagName = asyncHandler(async(req,res)=>{
    const foods = await FoodModel.find({tags:req.params.tagName})    
    res.send(foods)
  })
  export const getSingleFoods =asyncHandler(async(req,res)=>{
    const foodId = req.params.foodId
    const food = await FoodModel.findById(foodId)
    res.send(food)
  })
  export const favouriteFood = asyncHandler(async(req,res)=>{
    const foodId = req.params.foodId
    const food = await FoodModel.findById(foodId)
    if(food && food.favorite === false){
      food.favorite = true  
      res.status(200).json({message:"This Food has been added to your Favoorites!"})
    }else{
      if(food){
        food.favorite = false
        res.status(200).json({message:"This Food has been removed to your Favoorites!"})
      }
    }
    await food?.save()

  })