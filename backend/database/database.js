const mongoose = require("mongoose")

const uri = "mongodb link"

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log("mongodb bağlantısı başarılı"))
    .catch((err) => console.log("bağlantı hatası" + err.message))
}

module.exports = connection
