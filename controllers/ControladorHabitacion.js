import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}
    async registrarHabitacion(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //Esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar = peticion.body
            //validar los datos
            //Intentar guardar los datos
            await servicioHabitacion.registrarHabitacion(datos)
            //Responder
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de guardado", "datos":"datos guardados",
                "datos": datosHabitacionRegistrar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de guardado" + error
            })
        }
    }
    async buscarHabitaciones(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //intentar buscar los datos en DB
            //Respuesta
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de búsqueda", 
                "datos": await servicioHabitacion.buscarHabitaciones()
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de buscado" + error
            })
        }
    }
    async buscarHabitacionporId(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //Esculcar los parámetros de la petición
            let idHabitacionBuscar = peticion.params.id
            //Validar el dato que llegó
            //Intento buscar el dato en DB
            //Responder
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de búsqueda", 
                "datos": await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de buscado" + error
            })
        }
    }
    async modificarHabitacion(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //Traigo el id a editar de la petición
            let idHabitacionModificar = peticion.params.id
            let datosHbitacionModificar = peticion.body
            //validar los datos
            //intento buscar y modificar en DB
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHbitacionModificar)
            //responder
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de edición", 
                "datos": datosHbitacionModificar()
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Falla en la operación de edición" + error
            })
        }
    }
    async borrarHabitacion(peticion, respuesta){
        try{
            //
            let idHabitacionBorrar = peticion.params.id
            //validar
            //intento borrar la habitación en la DB
            //Respuesta
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