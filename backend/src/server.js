import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cakesRouter from './routers/cakes.router.js';
import usersRouter from './routers/user.router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();

const app =express();
app.use(express.json());
app.use(
    cors({
            credentials: true,
            origin:['http://localhost:3000'],
     })
);

app.use('/api/foods',cakesRouter);
app.use('/api/users',usersRouter);

const PORT =5000;
app.listen(PORT, () =>{
    console.log('lisening on port '+ PORT);
});

