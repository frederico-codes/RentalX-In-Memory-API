import express, { json } from "express"

const app = express()



app.use(json())



const PORT = 3333

app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}`);
  
})