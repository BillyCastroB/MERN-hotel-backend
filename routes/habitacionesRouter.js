import express from 'express'
import { habitacion } from '../controllers/habitacionController.js';
const router = express.Router();


router.post('/', habitacion);

export default router;