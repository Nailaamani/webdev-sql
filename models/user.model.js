//Filename: user.model.js
//Author  : Naila Amani
//Desc.   : for defining the models/schema of database used

import { Sequelize } from "sequelize";
import db from "../config/db.config.js"

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    user:{
        type:DataTypes.STRING
    },
    tasks:{
        type:[DataTypes.STRING]
    }
},{
        freezeTableName:true
});

export default Users;
