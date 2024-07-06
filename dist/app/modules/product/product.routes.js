"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router.post("/products", product_controllers_1.productControllers.createProduct);
router.get("/products", product_controllers_1.productControllers.getAllProducts);
router.get("/products/:productId", product_controllers_1.productControllers.singleProduct);
router.put("/products/:productId", product_controllers_1.productControllers.updateProduct);
router.delete("/products/:productId", product_controllers_1.productControllers.deleteProduct);
// this is search query api endpoint 
router.get("/product", product_controllers_1.productControllers.productSearchQuery);
exports.productRouter = router;
