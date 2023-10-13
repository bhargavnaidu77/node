const express= require('express');
const app =express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: '*',
}))
app.get('/',(req,res)=>{
    res.send("hello world")
})
const products=[
    
        {
            "id": 1,
            "model": "iphone"
        },
        {
            "id": 2,
            "model": "realme"
        },
        {
            "id": 3,
            "model": "oneplus"
        },
        {
            "id": 8,
            "model": "nano"
        },
        {
            "id": 9,
            "model": "oppo"
        },
        {
            "id": 10,
            "model": "vivo"
        }
    
    

]

app.get('/products/',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const newData=products.filter(item=>item.id.toString()===req.params.id )
    res.send(newData)
})

app.post('/addproducts',(req,res)=>{
    const {id,model}=req.body;
    console.log(id,model)
    data={id,model}
    products.push(data)
    return res.send(req.body)

})

app.listen(5000,()=>console.log("server running...."))

