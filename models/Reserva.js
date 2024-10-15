import mongoose from "mongoose";

const ReservaSchema = mongoose.Schema({
    huesped: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Huesped', 
        required: true  
    },
    habitacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitacion',
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    }
});

const Reserva = mongoose.model('Reserva', ReservaSchema);
export default Reserva;
