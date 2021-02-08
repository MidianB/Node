const express = require('express')
const app = express()

const connect = require("./bd/connect");
app.use(express.json());

app.get("/pedidos",(req,res)=>{
    connect.query("SELECT*FROM pedidos ", (error,result)=>{
        res.json(result);

    });
});

app.post("/pedidos",(req,res)=>{
    let dados =[]

    dados.push({
        titlepost:req.body.titlepost,
        categoria:req.body.categoria,
    
    })
    connect.query("INSERT INTO post SET ?", dados,() => {
        dados=[]
        res.json({mensagem:"Dado Enviado com sucesso!"})
    })
    })


app.listen(3333);
