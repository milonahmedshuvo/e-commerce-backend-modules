import { TProduct } from "./product.interferce";
import { ProductModel } from "./product.model";


const createProductFromDB = async (productData: TProduct) => {
    const result = await ProductModel.create(productData)
    return result
}


const allProducts = async () => {
      const result = await ProductModel.find();
      return result
}

const singleProduct = async (id:string) => {
      const query = {_id: new Object(id)}
      console.log("service id", query)
      const result = await ProductModel.findOne(query)
      return result
}





export const productService = {
    createProductFromDB,
    allProducts,
    singleProduct
}