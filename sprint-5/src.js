const contadorDoctor = async() => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/appointments");

    let CITAS = await response.json();

    drJuan = CITAS.filter(CITA => CITA.nombre == "Dr. Juan");
    drMario = CITAS.filter(CITA => CITA.nombre == "Dr. Mario");

    // nameJuan = drJuan[0].nombre;
    // nameMario = drMario[0].nombre;
    // console.log(typeof nameJuan, nameMario)

    contadorJuan = Object.keys(drJuan).length;
    contadorMario = Object.keys(drMario).length;

    const contadorCitasDoctor = {
        "Dr. Juan": contadorJuan,
        "Dr. Mario": contadorMario,
    }

    console.log(contadorCitasDoctor);
    return contadorCitasDoctor;

};


module.exports.contadorDoctor = contadorDoctor;