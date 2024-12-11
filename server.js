//const express = require ('express'); //old way
import express from 'express'; //new way to do it(but you have to add "test": "module" in package.json)
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //allows us to accept json data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => { //5000 represents out port
    connectDB();
    console.log('Server started at http://localhost:' + PORT);

});

