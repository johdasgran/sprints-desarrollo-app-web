const obtenerCitasDisponibles = async(
    especialidad,
    fecha_inicio,
    fecha_final
) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/appointments");
    // console.log(response)
    let dataitas = await response.json();
    console.table(dataitas);
    return dataitas;
};

const confirmarCita = async(idCita) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/confirm/" + idCita, {
        //code
    });
}

// module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
// module.exports.confirmarCita = confirmarCita;