import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReserva{
    constructor(){}
    async registrarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            let DatosReservaRegistrar = peticion.body
            await servicioReserva.registrarReserva(DatosReservaRegistrar)
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de guardado", "datos":"datos guardados",
                "datos": DatosReservaRegistrar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de guardado" + error
            })
        }
    }
    async buscarreserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de guardado", "datos":"datos guardados",
                "datos": await servicioReserva.buscarReservas()
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de buscado" + error
            })
        }
    }
    async buscarReservaporId(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            let idReservaBuscar = peticion.params.id
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de búsqueda", 
                "datos": await servicioReserva.buscarReserva(idReservaBuscar)
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de buscado" + error
            })
        }
    }
    async modificarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            let idReservaModificar = peticion.params.id
            let datosReservaModificar = peticion.body
            await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar)

            respuesta.status(200).json({
                "mensaje":"Exito en la operación de edición", 
                "datos": datosReservaModificar()
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de edición" + error
            })
        }
    }
    async borrarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            let idReservaBorrar = peticion.params.id
            await servicioReserva.borrarReserva(idReservaBorrar)
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de borrado"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de borrado" + error
            })
        }
    }
}