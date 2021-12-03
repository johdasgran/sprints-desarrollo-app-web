// console.log("patetic xd");

// CITAS = [{
//         especialidad: "odontologia",
//         nombre: "Dr. Juan",
//         fecha: "2020-01-01",
//         hora: "08:00"
//     },
//     {
//         especialidad: "medicina",
//         nombre: "Dr. Mario",
//         fecha: "2020-01-01",
//         hora: "08:00"
//     },
//     {
//         especialidad: "optometria",
//         nombre: "Dr. Juan",
//         fecha: "2020-01-01",
//         hora: "08:00"
//     },
//     {
//         especialidad: "odontologia",
//         nombre: "Dr. Juan",
//         fecha: "2020-01-01",
//         hora: "13:00"
//     },
//     {
//         especialidad: "odontologia",
//         nombre: "Dr. Juan",
//         fecha: "2020-01-01",
//         hora: "08:00"
//     }
// ]


const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {

    // console.log(fecha_inicio);
    // console.log(CITAS[0].fecha);

    //Esto esta extraño pero bueh xd
    //Filtre el array CITAS que concuerde así 3.1 que la especialidad de la cita sea igual al parámetro 
    //especialidad 3.2 que la fecha de la cita sea mayor o igual al parámetro fecha_inicioy 3.3 que el la 
    //fecha de la cita sea menor o igual al parámetro fecha_final.


    return CITAS.filter(CITA => CITA.especialidad == especialidad && CITA.fecha >= fecha_inicio && CITA.fecha <= fecha_final);

    // && fecha_inicio >= Date.parse(fecha_inicio) && fecha_final <= Date.parse(fecha_final)

}

const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {

    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);


    //parseInt() convierte el string de la hora en numero entero y compara con el numero


    if (jornadaPreferida == "mañana") {
        // console.log("win xd")
        return resultados.filter(resultado => parseInt(resultado.hora) >= 8 && parseInt(resultado.hora) <= 12);
    } else if (jornadaPreferida == "tarde") {
        return resultados.filter(resultado => parseInt(resultado.hora) >= 13 && parseInt(resultado.hora) <= 17);
    }

}

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;