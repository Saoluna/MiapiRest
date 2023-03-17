require("dotenv").config(); 

const express =require("express"); 
const app =express();
require("dotenv").config(); 

app.set('port', process.env.PORT || 4000)

const v1cocktailsRouter= require("./V1/routes/cocktailsRoutes");

const cors =require("cors"); 
const dbConnect =require('./Config/mongo');

app.use(express.json())
app.use(cors());
app.use("/api/V1/cocktails", v1cocktailsRouter);


app.listen(app.get('port'),()=> {
    console.log(`Server listening on port ${app.get('port')}`); 
})

dbConnect()


//ANOTACIONES
//1-Permite incorporar las variables de entorno de manera correcta 
//2-Se declara el paquete express que nos ayuda a iniciar un servicio web
//3-En este caso decimos a la app que haga uso de la libreria de cors, nos permite evitar el error de origen cruzado de los navegadores
//4-Se declara la constante con el numero del puerto
//5-Funcion inicial para que comience a escuchar el puerto estipulado 
