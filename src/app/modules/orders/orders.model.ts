import { Schema, model } from "mongoose";
import { TOrders } from "./orders.interferce";
import { ProductModel } from "../product/product.model";
;


const ordersSchema = new Schema <TOrders> ({
      email: {type: String, required: true },
      productId: {type: String, required:true},
      price: {type:Number, required: true},
      quantity: {type: Number, required: true}
})




ordersSchema.pre("save", async function (next) {
      
    
    
      try {
        const query = { _id: this.productId };
        const product:any = await ProductModel.findOne(query);
     
    
        if (!product) {
          return next(new Error('Product not found'));
        }
    
        
    
        if (product.inventory.quantity < this.quantity) {
          return next(new Error('Insufficient quantity available in inventory'));
        }


      
    
        product.inventory.quantity = product.inventory.quantity - this.quantity
    

        if (product.inventory.quantity === 0) {
          product.inventory.inStock = false;
        } else {
          product.inventory.inStock = true;
        }
    
        await product.save();
        next();
      } catch (error:any) {
        next(error);
      }
    });






export const OrdersModel = model("order", ordersSchema)


