const express = require("express");
const router = new express.Router();

const fileUploadController = require("../controller/fileupload-controller");
const upload = require("../middleware/auth");

router.post("/store_image", upload.single('myFile'), fileUploadController.storeImage)
// router.post("/store_multi_image", upload.array('myFiles', 2), fileUploadController.storeImage)
router.get('/request', fileUploadController.getRequest)

module.exports = router;