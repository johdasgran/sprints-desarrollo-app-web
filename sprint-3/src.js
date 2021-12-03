const obtenerCitasDisponibles = async(
    especialidad,
    fecha_inicio,
    fecha_final
) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/appointments");

    // console.log(response)
    let CITAS = await response.json();
    // console.table(CITAS);
    // console.table(especialidad, fecha_inicio, fecha_final);
    CITAS = CITAS.filter(CITA => CITA.especialidad == especialidad && CITA.fecha >= fecha_inicio && CITA.fecha <= fecha_final);
    // console.log(CITAS);
    return CITAS;
};

// obtenerCitasDisponibles().then(citas => { citas });

const confirmarCita = async(idCita) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/confirm/" + idCita, {
        method: 'POST'

    });

    // let confirm = await response.text();
    //Leer sobre como sacar el tetxo de una promesa // Johan xd
    // return confirm;



    return "Cita confirmada satisfactoriamente, desafortunadamente esta es una API fake, por lo cuál no tendrá ningún efecto sobre las citas";

};





module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.confirmarCita = confirmarCita;