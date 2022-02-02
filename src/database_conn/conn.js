const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/store_image',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("DATABASE connected...");
    })
    .catch(() => {
        console.log("DATABASE can't connected...");
    })
