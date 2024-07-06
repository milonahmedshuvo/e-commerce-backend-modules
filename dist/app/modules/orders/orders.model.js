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
exports.OrdersModel = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
;
const ordersSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
ordersSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = { _id: this.productId };
            const product = yield product_model_1.ProductModel.findOne(query);
            if (!product) {
                return next(new Error('Product not found'));
            }
            if (product.inventory.quantity < this.quantity) {
                return next(new Error('Insufficient quantity available in inventory'));
            }
            product.inventory.quantity = product.inventory.quantity - this.quantity;
            if (product.inventory.quantity === 0) {
                product.inventory.inStock = false;
            }
            else {
                product.inventory.inStock = true;
            }
            yield product.save();
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.OrdersModel = (0, mongoose_1.model)("order", ordersSchema);
