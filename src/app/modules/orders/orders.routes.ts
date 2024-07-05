import express from "express"
import { OrderControllers } from "./orders.controllers"

const router = express.Router()

router.post("/orders", OrderControllers.createOrders)
router.get("/orders", OrderControllers.ordersByUserEmail)
router.get("/orders", OrderControllers.allProductList)



export const OrdersRoutes = router