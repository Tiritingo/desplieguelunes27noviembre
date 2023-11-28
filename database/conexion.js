import mongoose from "mongoose";
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Éxito en la conexión')
    }catch(error){
        console.log('Falla en la conexión ' + error)
    }
}