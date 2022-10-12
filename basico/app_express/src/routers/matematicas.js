const { Router } = require("express");
const router = Router();

const { matematicas } = require("../assets/cursos.js").infoCursos;

router.get("/", (req, res) => {
    const orden = req.query.ordenar;
    if (orden) matematicas.sort((a, b) => b.vistas - a.vistas);
    res.send(matematicas);
});

router.get("/:tema", (req, res) => {
    const orden = req.query.ordenar;
    const tema = req.params.tema;
    const filtro = matematicas.filter(curso => curso.tema === tema);
    if (orden) filtro.sort((a, b) => b.vistas - a.vistas);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${tema}`)
});

router.get("/:tema/:nivel", (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const filtro = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${tema} con nivel ${nivel}`)
});

module.exports.router = router;