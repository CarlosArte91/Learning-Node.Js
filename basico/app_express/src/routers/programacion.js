const { Router } = require("express");
const router = Router();

const { programacion } = require("../assets/cursos.js").infoCursos;

router.get("/", (req, res) => {
    const orden = req.query.ordenar;
    if (orden) programacion.sort((a, b) => b.vistas - a.vistas);
    res.send(programacion);
});

router.get("/:lenguaje", (req, res) => {
    const orden = req.query.ordenar;     
    const lenguaje = req.params.lenguaje;
    const filtro = programacion.filter(curso => curso.lenguaje === lenguaje);
    if (orden) filtro.sort((a, b) => b.vistas - a.vistas);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${lenguaje}`);
});

router.get("/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const filtro = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    filtro.length ? res.send(filtro) : res.status(404).send(`No hay cursos de ${lenguaje} con el nivel ${nivel}`);
});

module.exports.router = router;