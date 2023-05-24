const mongoose = require("mongoose")

const uri = "mongodb+srv://uege70:1Trolza2@eticaretdb.psxxeqk.mongodb.net/?retryWrites=true&w=majority"

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log("mongodb bağlantısı başarılı"))
    .catch((err) => console.log("bağlantı hatası" + err.message))
}

module.exports = connection