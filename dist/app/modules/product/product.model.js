"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productInventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});
const VariantsObject = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantsObject], required: true },
    inventory: { type: productInventorySchema, required: true }
});
exports.ProductModel = (0, mongoose_1.model)("product", productSchema);
