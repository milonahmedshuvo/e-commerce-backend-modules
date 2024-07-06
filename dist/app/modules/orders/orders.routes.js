"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orders_controllers_1 = require("./orders.controllers");
const router = express_1.default.Router();
router.post("/orders", orders_controllers_1.OrderControllers.createOrders);
router.get("/orders", orders_controllers_1.OrderControllers.allProductList);
// this is query api endpoint 
router.get("/order", orders_controllers_1.OrderControllers.ordersByUserEmail);
exports.OrdersRoutes = router;
