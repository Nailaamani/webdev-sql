//Filename: server.js
//Author  : Naila Amani
//Desc.   : as a main server code to be run

import express from "express";
import db from "./config/db.config.js";
import allRoutes from "./routes/index.js";


const app = express();

// setting connection to database
try{
    await db.authenticate();
    console.log('Database successfully connected.')
} catch(error){
    console.log('Connection Error.', error);
}

app.use(express.json());
app.use(allRoutes);

// setting port used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});