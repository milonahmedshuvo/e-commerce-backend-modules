import express from "express"
import { OrderControllers } from "./orders.controllers"

const router = express.Router()

router.post("/orders", OrderControllers.createOrders)


export const OrdersRoutes = router