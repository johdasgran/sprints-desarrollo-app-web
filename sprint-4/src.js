const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("asdasd", (req, res) => {
    //code
});

app.post("sadasdsa", (req, res) => {
    //..
    //...

    appointments = appointments.map(appointment => {
        //logica pa confirmar citaxd
    });

});


// module.exports = app;