import express from "express"
import { loginUser, registerUser, seedUser } from "../controllers/user.controller";

const router = express.Router()
router.route("/user/seed").get(seedUser)
router.route("/login").post(loginUser)
router.route("/registeruser").post(registerUser)

export default router;