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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const student_joi_validation_1 = __importDefault(require("./student.joi.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product } = req.body;
        // joi validation data 
        const { value, error } = student_joi_validation_1.default.validate(product);
        if (error) {
            res.status(500).json({
                success: "false",
                message: "joi validation filed",
                error: error
            });
        }
        const result = yield product_service_1.productService.createProductFromDB(value);
        res.status(200).json({
            success: "true",
            message: "Product created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "product not create | something wrong",
            error: err
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.allProductsFromDB();
        res.status(200).json({
            success: "true",
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "not products list",
            error: err
        });
    }
});
const singleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.singleProductFromDB(productId);
        res.status(200).json({
            success: "true",
            message: "Product fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "single product not found",
            error: err
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { product } = req.body;
        const result = yield product_service_1.productService.updateProductFromDB(productId, product);
        res.status(200).json({
            success: "true",
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "product not update",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.deleteProductFromDB(productId);
        res.status(200).json({
            success: "true",
            message: "Product deleted successfully!",
            error: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "Product not deleted!",
            error: err
        });
    }
});
const productSearchQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const searchTerm = req.query.searchTerm
    // console.log("searchTerm:", searchTerm)
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.productService.productSearchQueryFromDB(searchTerm);
        res.status(200).json({
            success: "true",
            message: "Products matching search term 'iphone' fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: "false",
            message: "not search query product",
            error: err
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    singleProduct,
    updateProduct,
    deleteProduct,
    productSearchQuery
};
