import { TProduct } from "./product.interferce";
import { ProductModel } from "./product.model";


const createProductFromDB = async (productData: TProduct) => {
    const result = await ProductModel.create(productData)
    return result
}


const allProductsFromDB = async () => {
      const result = await ProductModel.find();
      return result
}

const singleProductFromDB = async (id:string) => {
      const query = {_id: new Object(id)}
      console.log("service id", query)
      const result = await ProductModel.findOne(query)
      return result
}


const updateProductFromDB = async (id:string, data:TProduct) => {
    const query = {_id: new Object(id) }
    const result = await ProductModel.updateOne(query, data )
    return result
}



const deleteProductFromDB = async (id:string) =>{
    const query = {_id: new Object(id) }
    const result = await ProductModel.deleteOne(query)
    return result
}



const productSearchQueryFromDB = async (search:string) => {
      const result = await ProductModel.find()
      return result
}



export const productService = {
    createProductFromDB,
     allProductsFromDB,
     singleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
    productSearchQueryFromDB
}