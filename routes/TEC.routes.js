const express = require("express");
const TecRoutes=express.Router();
const service=require('../SC_Services/TEC_Services');


TecRoutes.post('/getBalanceOf', (req,res)=>{
    try{
        console.log(JSON.stringify(req.body));
        service.getBalanceOf(req.body.account,res);
    } catch(e){
        console.log(e);
        res.send(e);
    }
});

TecRoutes.post('/transferTo', (req,res)=>{
    try{
        console.log(JSON.stringify(req.body));
        service.transfer(req.body.account,req.body.value,res);
    } catch(e){
        console.log(e);
        res.send(e);
    }
});

TecRoutes.post('/transferFrom', (req,res)=>{
    try{
        console.log(JSON.stringify(req.body));
        service.transferFrom(req.body.accountFrom,req.body.accountTo,req.body.value,res);
    } catch(e){
        console.log(e);
        res.send(e);
    }
});



module.exports = TecRoutes;

