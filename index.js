import express from 'express';
import { conexion } from './db/conexion.js';
const app = express();

const PORT = process.env.PORT || 5000;

conexion();

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en el puerto ${PORT}`)
});

app.use('/habitaciones', (req, res)=>{
    res.send('desde habitaciones');
})
app.use('/Login', (req, res)=>{
    res.send('desde login');
})
app.use('/panel', (req, res)=>{
    res.send('desde panel');
})
app.use('/reservar', (req, res)=>{
    res.send('desde reservar');
})

