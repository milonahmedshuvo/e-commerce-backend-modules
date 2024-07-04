import express from "express"
import cors from "cors"
import { productRouter } from "./app/modules/product/product.routes"
const app = express()
const port = 3000

// parsers 
app.use(express.json())
app.use(cors())


// application routes 
app.use("/api/products", productRouter)






app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log("app is runing..")
export default app;