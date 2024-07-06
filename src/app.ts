import express from "express"
import cors from "cors"
import { productRouter } from "./app/modules/product/product.routes"
import { OrdersRoutes } from "./app/modules/orders/orders.routes"
const app = express()
const port = 3000

// parsers 
app.use(express.json())
app.use(cors())



// application routes 
app.use("/api", productRouter)
app.use("/api", OrdersRoutes)










app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log("app is runing..")
export default app;