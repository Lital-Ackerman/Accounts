const express = require("express");
const operationbll = require("../bll/operations-bll");
const Operation = require("../models/operation-model");
const router = express.Router();

//Get operations by account ID
router.get("/:id", async(request, response)=>{
    const accountId= request.params.id;
    console.log(accountId)
    if(isNaN(accountId)){
        response.status(400).send({message: `Bad Account number '${accountId}' `})
    }
    else{
        try{
            const operations= await operationbll.getOperationsById(accountId);
            operations.length>0
            ? response.send(operations)
            : response.status(404).send({message: `No Operations for Account Number ${accountId}`})
            }
        catch(err){
            console.log(err);
            response.status(500).send({message: "Server Error!"});
        }
    }
})


//Get operation Types 
router.get("/select/types", async(request, response)=>{
    try{
    const result= await operationbll.getTypes();
    console.log(result);
    response.send(result);
    }
    catch(err){
        console.log(err);
        response.status(500).send({message: "Server Error"});
    }
})

//Add New Operation
router.post("/", async(request, response)=>{
    try{
    console.log(request.body);
    const operationToAdd= new Operation(request.body);
    console.log(operationToAdd);
    const error= operationToAdd.validate();
        if (error)
            response.status(400).send(error);
        else{
            const result= await operationbll.postOperation(operationToAdd);
            operationToAdd.objectId= result.insertId;
            response.status(201).send(operationToAdd);
        }
    }catch(err){
        console.log(err);
        response.status(500).send({message: "Server Error!"});
    }

})


module.exports = router;