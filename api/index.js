import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() =>{ 
        console.log('conectao papi');
    })
    .catch((err) => {
        console.log(err);
    });

const app = Express();

app.listen(3000, () =>{
    console.log('Server is runnning on port 3000');
}
);