import express from "express"
import { loginUser, seedUser } from "../controllers/user.controller";

const router = express.Router()
router.route("/user/seed").get(seedUser)
router.route("/login").post(loginUser)

export default router;