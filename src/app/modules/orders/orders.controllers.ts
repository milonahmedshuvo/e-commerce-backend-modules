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



const allProductList = async (req:Request, res:Response) => {
      try{
      const result = await OrderService.allProductListFromDB()
      res.status(200).json({
        success: "true",
        message: "Orders fetched successfully!",
        data: result
      })
      }catch(err){
        res.status(500).json({
            success: "false",
            message: "Ordersd data not found!",
            error: err
        })
      }
}





const ordersByUserEmail = async (req:Request, res:Response) => {
    try{
    const email = req.query.email;
    console.log("email:", email )
    const result = await OrderService.ordersByUserEmailFromDB(email as string)
    res.status(200).json({
        success: "true",
        message: "Orders fetched successfully for user email!",
        data: result
    })

    }catch(err){
        res.status(500).json({
            success: "false",
            message: "orders not fetch for user email!",
            error: err
        })
    }
}

export const OrderControllers = {
    createOrders,
    allProductList,
    ordersByUserEmail
}