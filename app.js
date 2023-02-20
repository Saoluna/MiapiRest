require("dotenv").config(); //Permite incorporar las variables de entorno de manera correcta 

const express =require("express"); //se declara el paquete express que nos ayuda a iniciar un servicio web

const cors =require("cors"); //En este caso decimos a la app que haga uso de la libreria de cors, nos permite evitar el error de origen cruzado de los navegadores

const dbConnect =require('./Config/mongo');

const app =express();

app.use(cors());

const port =process.env.PORT || 3000; //se declara la constante con el numero del puerto

app.listen(port,()=> {
    console.log('http://localhost:'+port); //funcion inicial para que comience a escuchar el puerto estipulado 
})

dbConnect()