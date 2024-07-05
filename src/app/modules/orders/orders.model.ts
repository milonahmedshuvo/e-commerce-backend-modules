import { Schema, model } from "mongoose";
import { TOrders } from "./orders.interferce";
;


const odersSchema = new Schema <TOrders> ({
      email: {type: String, required: true },
      productId: {type: String, required:true},
      price: {type:Number, required: true},
      quantity: {type: Number, required: true}
})




export const OrdersModel = model("order", odersSchema)


