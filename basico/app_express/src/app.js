const express = require("express");
const routerProgramacion = require("./routers/programacion.js").router;
const routerMatematicas = require("./routers/matematicas.js").router;
const general = require("./routers/general").router;

const app = express();

app.use("/", general);
app.use("/cursos/programacion", routerProgramacion);
app.use("/cursos/matematicas", routerMatematicas);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listen in port ${PORT}`));