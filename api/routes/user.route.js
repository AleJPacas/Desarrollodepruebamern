import express from 'express';
import { test } from '../Controller/user.controller.js'

const router =  express.Router(); 

router.get('/test', test);
// craccion de req . >data de cliente y res es la data del server

export default router;