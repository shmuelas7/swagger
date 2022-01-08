const express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')

const swaggerUi = require('swagger-ui-express');
const  swaggerDocument = require('./swagger.ts')

const app= express()

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))


const port = 3000; 

app.use(bodyparser.urlencoded({extended:true}))

app.get("",(req,res) =>{
    res.sendFile(__dirname+"/index.html")

})

app.post("/",(req,res)=>{
    let data = fs.readFileSync("./index.html")

    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    let result = n1+n2
    
    
    console.log(result)
    //data= data.replace("?", result)
    res.status(200)
    .send('the resutl is'+ result)


})

app.listen(port ,(res)=>{
    console.log(`server started listning ot port ${port}`)
})