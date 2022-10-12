const express = require("express");
const { infoCursos } = require("./assets/cursos.js");

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenido a mi API de Node y Express 👽 🤟");
});

app.get("/cursos", (req, res) => {
    res.send(infoCursos);
});

app.get("/cursos/programacion", (req, res) => {
    res.send(infoCursos.programacion);
});

app.get("/cursos/matematicas", (req, res) => {
    const orden = req.query.ordenar;
    if (orden) infoCursos.matematicas.sort((a, b) => b.vistas - a.vistas);
    res.send(infoCursos.matematicas);
});

app.get("/cursos/programacion/:lenguaje", (req, res) => {
    const orden = req.query.ordenar
     
    const lenguaje = req.params.lenguaje;
    const filtro = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (orden) filtro.sort((a, b) => b.vistas - a.vistas);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${lenguaje}`);
});

app.get("/cursos/programacion/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const filtro = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${lenguaje} con el nivel ${nivel}`);
});


app.get("/cursos/matematicas/:tema", (req, res) => {
    const orden = req.query.ordenar

    const tema = req.params.tema;
    const filtro = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if (orden) filtro.sort((a, b) => b.vistas - a.vistas);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${tema}`)
});

app.get("/cursos/matematicas/:tema/:nivel", (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const filtro = infoCursos.matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${tema} con nivel ${nivel}`)
});







const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listen in port ${PORT}`));