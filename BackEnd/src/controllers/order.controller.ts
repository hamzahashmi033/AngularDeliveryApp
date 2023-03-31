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
export const getOrderForCurrentUser = expressAsyncHandler(async (req:any,res:any)=> {
     const order = await OrderModel.findOne({user:req.user.id,status:OrderStatus.NEW})
     if(order){
      res.send(order)
     } 
     else{
      res.status(400).send()
     }
})
export const pay = expressAsyncHandler(async (req:any,res:any)=>{
 const {paymentId} = req.body
 const order = await OrderModel.findOne({user:req.user.id,status:OrderStatus.NEW})
 if (!order) {
   res.status(400).send("Order not Found")
 }else{
   order.paymentId = paymentId
   order.status = OrderStatus.PAYED
   await order.save()
   res.send(order._id)
 }
})