"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const orders_service_1 = require("./orders.service");
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {order} = req.body
    //   const result = await OrderService.orderCreateFromDB(order)
    //   res.status(200).json({
    //       success: "true",
    //       message: "Order created successfully!",
    //       data: result 
    //   })
    try {
        const { order } = req.body;
        const result = yield orders_service_1.OrderService.orderCreateFromDB(order);
        res.status(200).json({
            success: "true",
            message: "Order created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: err.message || "Order not created!",
            error: err
        });
    }
});
const allProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.OrderService.allProductListFromDB();
        res.status(200).json({
            success: "true",
            message: "Orders fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "Ordersd data not found!",
            error: err
        });
    }
});
const ordersByUserEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield orders_service_1.OrderService.ordersByUserEmailFromDB(email);
        res.status(200).json({
            success: "true",
            message: "Orders fetched successfully for user email!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "orders not fetch for user email!",
            error: err
        });
    }
});
exports.OrderControllers = {
    createOrders,
    allProductList,
    ordersByUserEmail
};
