//Filename: index.js
//Author  : Naila Amani
//Desc.   : contains the definition of routes that can be accessed by HTTP

import express from "express";
import {createUsers, updateUsers, getCommon} from "../controllers/user.controller.js";


const router = express.Router();

// routes for api testing
router.post('/api/register', createUsers);
router.post('/api/assign', updateUsers);
router.post('/api/unassign', updateUsers);
router.post('/api/tasks/common', getCommon);

export default router;
