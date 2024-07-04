import { Request, Response } from "express"
import { productService } from "./product.service"
import JoiProductSchema from "./student.joi.validation"


const createProduct = async (req:Request, res:Response) => {

    try{
    const {product} = req.body 
    // joi validation data 
    const {value, error} = JoiProductSchema.validate(product)


    if(error){
        res.status(500).json({
            success: "false",
            message: "joi validation filed",
            error: error
        })
    }
    
    const result = await productService.createProductFromDB(value)
    res.status(200).json({
        success: "true",
        message: "Product created successfully!",
        data: result
    })

    }catch(err:any){
        res.status(500).json({
            success: "false",
            message: "product not create | something wrong",
            error: err
        })
    }
    
}




const getAllProducts = async (req:Request, res:Response) => {
      
      try{

        const result = await productService.allProducts()
        res.status(200).json({
        success: "true",
        message: "Products fetched successfully!",
        data: result
      })

      }catch(err:any){
        res.status(500).json({
            success: "false",
            message: "not products list",
            error: err
        })
      }
}




const singleProduct = async (req:Request, res:Response) => {

      try{

      const {productId} = req.params
      console.log(productId)
      const result = await productService.singleProduct(productId)
      res.status(200).json({
        success: "true",
        message: "Product fetched successfully!",
        data: result
      })

      }catch(err:any){
        res.status(500).json({
            success: "false",
            message: "single product not found",
            error: err
        })
      }
      
}



export const productControllers = {
      createProduct,
      getAllProducts,
      singleProduct
}