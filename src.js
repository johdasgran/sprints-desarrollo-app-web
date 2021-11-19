// "use strict"


console.log("patetic xd");




const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {





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
    }
]


    console.log(CITAS[0].fecha)



// bueh por ahí va xd

    var fecha = new Date();

    let fecha1 = Date.parse(CITAS.fecha_inicio);
    console.log(CITAS.fecha1);



// if (fecha_inicio >= CITAS.fecha && fecha_final <= CITAS.fecha && especialidad == CITAS.especialidad) {
    
// } else {
    
// }



    console.log(fecha);



    // return CITAS.filter("retorneme este xd");
}
const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {
    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);
    return resultados.filter();
}

// module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
// module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;