import { number } from "joi";
import { ProductModel } from "../product/product.model";
import { TOrders } from "./orders.interferce";
import { OrdersModel } from "./orders.model";
import { json } from "express";

const orderCreateFromDB = async (orderData:TOrders) => {
      const query = {_id: new Object(orderData.productId) }
      const product = await ProductModel.findOne(query)
      
      const productQuantiy = product?.inventory.quantity as number < orderData.quantity

      
      

      
      
      
      



      const result = await OrdersModel.create(orderData)
      return result
}


const allProductListFromDB = async () =>{
    const result = await OrdersModel.find()
    return result
}


const ordersByUserEmailFromDB = async (email:string) => {
    const query = {email: email}
    console.log(query)
    const result = await OrdersModel.find(query)
    console.log(result)
    return result
}





export const OrderService = {
    orderCreateFromDB,
    allProductListFromDB,
    ordersByUserEmailFromDB
}

function next(error: Error) {
    throw new Error("Function not implemented.");
}
