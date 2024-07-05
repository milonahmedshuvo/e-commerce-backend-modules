import { TOrders } from "./orders.interferce";
import { OrdersModel } from "./orders.model";

const orderCreateFromDB = async (orderData:TOrders) => {
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