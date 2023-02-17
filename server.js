const express = require("express");

const app = express();

app.use(express.json())

app.get("/", (res,req) => {
    req.send("Hello World")
})

const products = [
    {
        id : 1,
        name : "Iphone"
    },
    {
        id: 2,
        name : "Samsung"
    },
    {
        id: 3,
        name : "Vivo"
    }
]

app.get("/products", (res, req) => {
    req.json(products)
})

app.get("/products/:id", (req,res) => {
  const NewData = products.filter(item => item.id.toString() === req.params.id)
  return  res.json(NewData)
})

app.post("/addproducts", (req,res) => {
    const {id, name} = req.body
    console.log(id, name)
    return res.json("Data Stored Sucessfully !!")
})

app.listen(5000, () => console.log("express Port is running"))