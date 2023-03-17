const mongoose=require("mongoose"); //Llamamos nuestro gestor de base de datos 
require("dotenv").config(); 

const dbConnect =() =>{
    const DB_URI =process.env.DB_URI;
    mongoose.set("strictQuery", false);

     mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    },(err, res) => {
        if(!err){
            console.log('***CONEXION CORRECTA***')
        }else{ 
            console.log('***ERROR DE CONEXION***')
        }


    });
};

module.exports =dbConnect