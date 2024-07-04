import { Schema, model } from "mongoose"
import { ProductInventory, TProduct, VariantsObject } from "./product.interferce"


const productInventorySchema = new Schema <ProductInventory> ({
      quantity: {type: Number, required: true},
      inStock: {type: Boolean, required: true}
})

const VariantsObject = new Schema <VariantsObject> ({
      type: {type: String, required: true },
      value: {type: String, required: true }
})

const productSchema = new Schema < TProduct> ({
    name: { type: String, required: true },
    description: {type: String, required: true },
    price: {type: Number, required: true},
    category: {type: String, required:true},
    tags: {type: [String], required: true },
    variants: {type: [ VariantsObject ], required: true },
    inventory: {type:productInventorySchema, required: true }
})


export const ProductModel = model("product", productSchema)