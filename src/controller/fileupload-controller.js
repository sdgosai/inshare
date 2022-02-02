const Upload =  require('../model/fileupload-model');
const fs = require('fs');
const path = require('path');

const storeImage = async (req,res) => {
    const requestBody = new Upload({
        name: req.body.name,
        images: req.file.path
    })
    // const request = new Request(requestBody)
    console.log(requestBody);
    try{
        await requestBody.save()
        res.status(201).send(requestBody)
    }catch(e){
        res.status(400).send(e)
    }
}

const getRequest = async (req,res) => {
    try{
        const requests = await Request.find({})
        console.log(requests)
        res.send()
    }catch(e){
        res.status(500).send()
    }
}

module.exports = {
    storeImage,
    getRequest,

    
}