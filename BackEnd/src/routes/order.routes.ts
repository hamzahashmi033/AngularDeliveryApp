import { Router } from "express";
import { createOrder, getOrderForCurrentUser, pay } from "../controllers/order.controller";

import authMid from "../middleware/auth.mid";

const router = Router()
router.use(authMid)

router.route("/createorder").post(createOrder)
router.route("/getsingleorder").get(getOrderForCurrentUser)
router.route("/pay").post(pay)
export default router