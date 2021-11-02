//Filename: user.controller.js
//Author  : Naila Amani
//Desc.   : containing main logic/function to be run when accessing a routes

import Users from "../models/user.model.js"
import db from "../config/db.config.js";

 export const createUsers = async (req, res) => {
    const newData = {
        user: req.body.user,
        tasks: req.body.tasks
      };
    
    try{
     await Users.create(newData);
     res.json({
         "message":"User created"});
    } catch (error){
        res.json({message: error.message});
    }
 };

 
 export const updateUsers = async (req, res) => {
 const user = req.body.user;

  Users.update(req.body, {
    where: { user : user }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Users data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Users data with user= ${user}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Users Data with user=" + user
      });
    });
};


export const getCommon = async (req, res) => {
    const user = req.body.user;
    const tasks = req.body.tasks;

    Users.findOne(req.body, {
      where: { user: user }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            tasks
          });
        } else {
          res.send({
            message: "Error in getting data for user =" + user
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error in getting data for user =" + user
        });
      });
 };
