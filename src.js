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
}
]


// var fecha = new Date();

//     console.log(fecha.getFullYear());

var y = new Date();
var x = new Date(2020,01,01);

// CITAS[0].hora
// var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var mensaje = CITAS[0].hora;

var resultado = mensaje.split(":");

console.log(resultado[0]);

console.log(parseInt(resultado));


// console.log(y.getTime());




var arrayDeCadenas = CITAS[0].hora.split(", ");

console.log(arrayDeCadenas[0]);

































// compararFecha = x.getFullYear()+"-0"+x.getMonth()+"-0"+x.getDate();


// if (Date.parse(compararFecha) > Date.parse(CITAS[0].fecha)) {
//     console.log("WHUALAAA XD");
// } else {
    
// }

// console.log(Date.parse(compararFecha));


// console.log(CITAS[0].hora);
























const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {







    // console.log(CITAS[0].fecha)



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







// var y = new Date();
// var x = new Date(2020,01,01);

// compararFecha = x.getFullYear()+"-0"+x.getMonth()+"-0"+x.getDate();


// if (Date.parse(compararFecha) > Date.parse(CITAS[0].fecha)) {
//     console.log("WHUALAAA XD");
// } else {
    
// }