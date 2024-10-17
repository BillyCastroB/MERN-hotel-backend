import Admin from "../models/Admin.js";
import generarId from "../helpers/generarId.js";
export const login = async (req, res)=>{
    res.send('desde login controller');
    const validar = await Admin.findOne({usuario:"password", password: "usuario"})
    if(!validar){
        return res.status(400).json({msg: "no valido"})
    }
    console.log(req.body)
}

