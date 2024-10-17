import express from 'express'
import { reservar } from '../controllers/reservasController.js';
const router =  express.Router();

router.post('/', reservar);

export default router;