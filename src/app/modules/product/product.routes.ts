import  express  from "express";
import { productControllers } from "./product.controllers";

const router = express.Router()



router.post("/products",productControllers.createProduct)
router.get("/products",productControllers.getAllProducts)
router.get("/products/:productId", productControllers.singleProduct)
router.put("/products/:productId", productControllers.updateProduct)
router.delete("/products/:productId", productControllers.deleteProduct)
// this is search query api endpoint 
router.get("/product", productControllers.productSearchQuery)






export const productRouter = router