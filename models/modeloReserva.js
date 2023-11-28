import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema ({
    fechaEntrada:{
        type: Date,
        required: true
    },
    fechaSalida:{
        type: Date,
        required: true
    },
    personas:{
        type: Number,
        required: true
    },
    nombrePersona:{
        type: String,
        required: true
    },
    costo:{
        type: Number,
        required: false
    }
})

export const modeloReserva = mongoose.model('reservas', Reserva)