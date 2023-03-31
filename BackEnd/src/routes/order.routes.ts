import { Router } from "express";
import { createOrder } from "../controllers/order.controller";

import authMid from "../middleware/auth.mid";

const router = Router()
router.use(authMid)

router.route("/createorder").post(createOrder)
export default router