import { Request, Response } from "express";
import { OrderService } from "./orders.service";

const createOrders = async (req:Request, res:Response) => {
      try{
      const {order} = req.body
      const result = await OrderService.orderCreateFromDB(order)
      res.status(200).json({
          success: "true",
          message: "Order created successfully!",
          data: result 
      })
      }catch(err:any){
        res.status(500).json({
            success: "false",
            message: "Order not created!",
            error: err
        })
      }
}




export const OrderControllers = {
    createOrders
}