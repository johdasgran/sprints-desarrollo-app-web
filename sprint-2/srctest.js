console.log("patetic xd");

CITAS = [{
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
    },
    {
        especialidad: "odontologia",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "13:00"
    },
    {
        especialidad: "odontologia",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "08:00"
    }
]


const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {

    // console.log(fecha_inicio);
    // console.log(CITAS[0].fecha);

    return CITAS.filter(CITA => CITA.especialidad == especialidad && CITA.fecha >= fecha_inicio && CITA.fecha <= fecha_final);

    // && fecha_inicio >= Date.parse(fecha_inicio) && fecha_final <= Date.parse(fecha_final)

}

const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {

    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);



    // let hora = resultados[0].hora.split(":");
    // console.log(parseInt(hora[0]));
    // resultado.hora = parseInt(resultados.hora);
    // console.log(resultados[0].hora);


    if (jornadaPreferida == "mañana") {
        // console.log("win xd")
        return resultados.filter(resultado => parseInt(resultado.hora) >= 8 && parseInt(resultado.hora) <= 12);
    } else if (jornadaPreferida == "tarde") {
        return resultados.filter(resultado => parseInt(resultado.hora) >= 13 && parseInt(resultado.hora) <= 17);
    }

    // return resultados.filter(resultado => jornadaPreferida == "mañana" && parseInt(resultado.hora) >= 8 && parseInt(resultado.hora) <= 12);


    // return resultados.filter(function(resultado) {
    //     if (jornadaPreferida == "mañana" && parseInt(resultado.hora) >= 8 && parseInt(resultado.hora) <= 12) {
    //         console.log("hello baby xd")
    //         return resultado;
    //     } else if (jornadaPreferida == "tarde" && parseInt(resultado.hora) >= 13 && parseInt(resultado.hora) <= 17) {
    //         console.log("no e q sea anti social e q ustede dan mala vibra <3");
    //     }

    // });



}

// module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
// module.exports.obtenerCitasPorJornada=obtenerCitasPorJornada;

// module.exports = {
//     obtenerCitasDisponibles,
//     obtenerCitasPorJornada
// }