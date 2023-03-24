import express from "express"
import {  favouriteFood, getAllFood, getFoodByTagName, getSingleFoods, getTags, searchFoods, seedingFoods } from "../controllers/food.controller";

const router = express.Router()

router.route("/seed").get(seedingFoods)
router.route("/").get(getAllFood)
router.route("/tags").get(getTags)
router.route("/tags/:tagName").get(getFoodByTagName)
router.route("/food/:foodId").get(getSingleFoods)
router.route("/foods/:searchTerm").get(searchFoods)
router.route("/favorites/:foodId").get(favouriteFood)
export default router;