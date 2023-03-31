import { Router } from "express";
import { createOrder, getOrderForCurrentUser, pay, trackOrder } from "../controllers/order.controller";

import authMid from "../middleware/auth.mid";

const router = Router()
router.use(authMid)

router.route("/createorder").post(createOrder)
router.route("/getsingleorder").get(getOrderForCurrentUser)
router.route("/pay").post(pay)
router.route("/track/:orderId").get(trackOrder)
export default router