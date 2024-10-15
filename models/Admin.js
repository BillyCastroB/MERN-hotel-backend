import mongoose from "mongoose";

export const AdminSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String
    },
    connfirmado:{
        type: Boolean,
        default: false
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;