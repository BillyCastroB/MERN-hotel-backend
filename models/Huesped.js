import mongoose from "mongoose";

const HuespedSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellidos: {
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    telefono:{
        type: Number,
        required: true
    }
})
const Huesped = mongoose.model('Huesped', HuespedSchema);
export default Huesped;