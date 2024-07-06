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
exports.productService = void 0;
const product_model_1 = require("./product.model");
const createProductFromDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(productData);
    return result;
});
const allProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const singleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new Object(id) };
    console.log("service id", query);
    const result = yield product_model_1.ProductModel.findOne(query);
    return result;
});
const updateProductFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new Object(id) };
    const result = yield product_model_1.ProductModel.updateOne(query, data);
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new Object(id) };
    const result = yield product_model_1.ProductModel.deleteOne(query);
    return result;
});
const productSearchQueryFromDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.ProductModel.find({
        $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } },
            { tags: { $regex: search, $options: 'i' } }
        ]
    });
    return products;
});
exports.productService = {
    createProductFromDB,
    allProductsFromDB,
    singleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
    productSearchQueryFromDB
};
