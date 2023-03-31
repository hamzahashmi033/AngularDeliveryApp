import expressAsyncHandler from "express-async-handler";
import { OrderModel, OrderStatus } from "../models/order.model";

export const createOrder =expressAsyncHandler(async(req:any,res:any)=>{
 const requestedOrder = req.body
 if(requestedOrder.items.length <= 0){
    res.status(400).send("Cart is empty")
    return
 }
 await OrderModel.deleteOne({
    user:req.user.id,
    status:OrderStatus.NEW
 })
 const newOrder = new OrderModel({...requestedOrder,user:req.user.id})
 await newOrder.save()
 res.status(200).send(newOrder)
}) 