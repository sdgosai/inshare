const multer = require('multer');
const path = require('path');

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null, "public/")
    },
    filename:function(req,file,cb) 
    {
        const newName = file.originalname;
        cb(null,newName);
    }
})

const upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
            return res.send('file is not allowed');
        }
        cb(null, true)
    }
})

module.exports = upload;