import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//Para poder llamar al controlador se debe crear un objeto de la clase ControladorHabitacion

let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

export let rutas=express.Router()

rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionporId)
rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion)

rutas.post('/api/reservas', controladorReserva.registrarReserva)
rutas.get('/api/reserva/:id', controladorReserva.buscarReservaporId)
rutas.get('/api/reservas', controladorReserva.buscarreserva)
rutas.put('/api/reservas/:id', controladorReserva.modificarReserva)
rutas.delete('/api/reservas/:id', controladorReserva.borrarReserva)