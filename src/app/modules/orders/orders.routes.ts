import express from "express"
import { OrderControllers } from "./orders.controllers"

const router = express.Router()

router.post("/orders", OrderControllers.createOrders)
router.get("/orders", OrderControllers.allProductList)
// this is query api endpoint 
router.get("/order", OrderControllers.ordersByUserEmail)



export const OrdersRoutes = router

