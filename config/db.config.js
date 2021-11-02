//Filename: db.config.js
//Author  : Naila Amani
//Desc.   : as a configuration to connect with database

import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;