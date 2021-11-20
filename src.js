// "use strict"


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
        fecha: "2021-01-01",
        hora: "12:00"
    }
]


const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {

    // console.log(fecha_inicio);
    // console.log(CITAS[0].fecha);

    return CITAS.filter(CITA => CITA.especialidad == especialidad && fecha_inicio >= CITA.fecha && fecha_final <= CITA.fecha);

    // && fecha_inicio >= Date.parse(fecha_inicio) && fecha_final <= Date.parse(fecha_final)

}

const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {

    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);



    let hora = resultados[0].hora.split(":");

    console.log(parseInt(hora[0]));


    // resultado.hora = parseInt(resultados.hora);

    // console.log(resultados[0].hora);



    // 4. Filtra el resultado del punto 3 de la siguiente manera, si la jornada es mañana sólo se van a filtrar las horas de 8 a 12 y si es tarde se va a filtrar las citas que tengan hora de 1 a 5.(ver la siguiente sección para ahondar más)
    // 5. Podrás notar que esta historia de usuario usa dos filtros.
    // 6. Exporte la variable empleando la siguiente sentencia de código:



    // if ('hora' in resultados) {
    //     resultados.hora = resultados[0].hora.split(":");
    // }


    if (jornadaPreferida == "mañana") {


        return resultados.filter(resultado => parseInt((resultado.hora.split(":")).hora) >= 8 && parseInt((resultado.hora.split(":")).hora <= 12));
    } else {
        return resultados.filter(resultado => resultado.hora >= 13 && resultado.hora <= 17);
    }



    // &&
    // parseInt(resultado.hora <= 12)

    return resultados.filter(resultado => parseInt(resultado.hora) > 8);

}

// module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
// module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;







// var y = new Date();
// var x = new Date(2020,01,01);

// compararFecha = x.getFullYear()+"-0"+x.getMonth()+"-0"+x.getDate();


// if (Date.parse(compararFecha) > Date.parse(CITAS[0].fecha)) {
//     console.log("WHUALAAA XD");
// } else {

// }




// fecha_inicio = Date.parse(fecha_inicio);
// fecha_final = Date.parse(fecha_final);

// citas_fecha = Date.parse(CITAS[0].fecha);

// console.log(CITAS[0].fecha)

// if (Date.parse(compararFecha) > Date.parse(CITAS[0].fecha)) {
//     console.log("WHUALAAA XD");
// } else {

// }
// console.log(citas_fecha);
// console.log(fecha_final);
// console.log(fecha_inicio);



// console.log(CITAS[0].hora);

// console.log(CITAS[0].especialidad);
// console.log(especialidad);

// if (especialidad == CITAS[0].especialidad && fecha_inicio >= citas_fecha && fecha_final <= citas_fecha) {
//     console.log("create filter");
// } else {
//     console.log("not create");
// }














// compararFecha = x.getFullYear()+"-0"+x.getMonth()+"-0"+x.getDate();


// if (Date.parse(compararFecha) > Date.parse(CITAS[0].fecha)) {
//     console.log("WHUALAAA XD");
// } else {

// }

// console.log(Date.parse(compararFecha));


// console.log(CITAS[0].hora);




// var y = new Date();
// var x = new Date(2020, 01, 01);

// CITAS[0].hora
// var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

// var mensaje = CITAS[0].hora;
// var mensaje = CITAS[0].hora;