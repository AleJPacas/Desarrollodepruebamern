import Express, { request } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; //conexion especifica par ala ruta
dotenv.config();

mongoose //Conexion + estado de la conexion
    .connect(process.env.MONGO)
    .then(() =>{ 
        console.log('conectao papi');
    })
    .catch((err) => {
        console.log(err);
    });

const app = Express();

app.listen(3000, () =>{
    console.log('Server is runnning on port 3000'); //correr el servidor en el puerto 3000
}
);

app.use('/api/user', userRouter) // llamar la ruta con si tipo de direcccion