const mongoose = require("mongoose");

const fileUploadSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    images:{
        data:Buffer,
        contentType:String,
    }
}, { timestamps:true });

const Upload = mongoose.model("Upload", fileUploadSchema);
module.exports = Upload;