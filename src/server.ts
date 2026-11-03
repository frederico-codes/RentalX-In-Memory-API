import express, { json } from "express"
import { routes } from "./routes"
const app = express()



app.use(json())

app.use(routes)

const PORT = 3333

app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}`);
  
})