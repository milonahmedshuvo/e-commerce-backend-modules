import  express  from "express";
import { productControllers } from "./product.controllers";

const router = express.Router()



router.post("/",productControllers.createProduct)
router.get("/",productControllers.getAllProducts)
router.get("/:productId", productControllers.singleProduct)




export const productRouter = router