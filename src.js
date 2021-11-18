"use strict"


globalThis.CITAS = [{
        especialidad: "odontologia",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "08:00"
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "08:00"
    },
    {
        especialidad: "optometria",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "08:00"
    }
]



const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {
    return CITAS.filter();
}
const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {
    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);
    return resultados.filter();
}

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;