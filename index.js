import express from 'express';
import { conexion } from './db/conexion.js';
import habitacionRouter from './routes/habitacionesRouter.js';
import reservarRouter from './routes/reservasRouter.js'
import loginRouter from './routes/loginRouter.js'


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

conexion();

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en el puerto ${PORT}`)
});

app.use('/habitaciones', habitacionRouter)
app.use('/reservar', reservarRouter);
app.use('/login', loginRouter);

app.use('/panel', (req, res)=>{
    res.send('desde panel');
})
