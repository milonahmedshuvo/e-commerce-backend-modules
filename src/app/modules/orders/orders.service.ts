import { TOrders } from "./orders.interferce";
import { OrdersModel } from "./orders.model";

const orderCreateFromDB = async (orderData:TOrders) => {
      const result = await OrdersModel.create(orderData)
      return result
}




export const OrderService = {
    orderCreateFromDB
}