import mongoose from "mongoose";
const HabitacionSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: double,
        required: true,
    },
    disponible: {
        type: Boolean,
        default: false
    }
})

const Habitacion = mongoose.model('Habitacion', HabitacionSchema);
export default Habitacion;

