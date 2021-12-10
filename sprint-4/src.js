const express = require("express");
const app = express();
let appointments = require("./appointments.json");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const morgan = require('morgan');
// const port = 3000;
// app.use(morgan('tiny'));



///api/medical-appointments/appointments
///api/medical-appointments/apointments
app.get('/api/medical-appointments/apointments', (req, res) => {

    res.status(200).json(appointments);

});


///api/medical-appointments/confirm/:appointment_id
///api/medical-appointments/confirm/:appointment_id
app.post('/api/medical-appointments/confirm/:appointment_id', (req, res) => {

    // console.log(req.params)
    let { appointment_id } = req.params;

    // console.log(typeof appointment_id);
    appointments = appointments.map(appointment => {
        // console.log(appointment.id)
        if (appointment.id === parseInt(appointment_id)) {
            appointment.status = "confirmed";
            res.status(200).json(appointments);

        }

    });

});






// app.listen(port, () => {
//     console.log(`Servidor corriendo por el puerto => ${port}`)
// });



module.exports = app