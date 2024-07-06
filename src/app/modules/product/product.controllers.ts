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

        const result = await productService.allProductsFromDB()
        res.status(200).json({
        success: "true",
        message: "Products fetched successfully!",
        data: result
      })

      }catch(err:unknown){
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
      const result = await productService.singleProductFromDB(productId)
      res.status(200).json({
        success: "true",
        message: "Product fetched successfully!",
        data: result
      })

      }catch(err:unknown){
        res.status(500).json({
            success: "false",
            message: "single product not found",
            error: err
        })
      }
      
}



const updateProduct = async (req:Request, res:Response) => {
     try{
        const {productId} = req.params
        const {product} = req.body
        const result = await productService.updateProductFromDB(productId, product)
        res.status(200).json({
          success: "true",
          message: "Product updated successfully!",
          data: result
        })
     }catch(err:unknown){
        res.status(500).json({
            success: "false",
            message: "product not update",
            error: err,
        })
     }
}



const deleteProduct = async (req:Request, res:Response) => {
      try{
       
      const {productId} = req.params
      const result = await productService.deleteProductFromDB(productId)
      res.status(200).json({
        success: "true",
        message: "Product deleted successfully!",
        error: result
      })

      }catch(err:unknown){
          res.status(500).json({
            success: "false",
            message: "Product not deleted!",
            error: err
          })
      }
}




const productSearchQuery = async (req:Request, res:Response) => {

    // const searchTerm = req.query.searchTerm
    // console.log("searchTerm:", searchTerm)
      try{
        const searchTerm = req.query.searchTerm
        const result = await productService.productSearchQueryFromDB(searchTerm as string)
        res.status(200).json({
        success: "true",
        message: "Products matching search term 'iphone' fetched successfully!",
        data: result
      })

      }catch(err){
        res.status(500).json({
            success: "false",
            message: "not search query product",
            error: err
        })
      }
}


export const productControllers = {
      createProduct,
      getAllProducts,
      singleProduct,
      updateProduct,
      deleteProduct,
      productSearchQuery
}