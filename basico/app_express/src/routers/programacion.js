const { Router } = require("express");
const router = Router();

const { programacion } = require("../assets/cursos.js").infoCursos;

// Metodo GET
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

// Metodo POST
router.post("/", (req, res) => {
    const nuevoCurso = req.body;
    programacion.push(nuevoCurso);
    res.send(`El curso "${nuevoCurso.titulo}" fue agregado correctamente`);
});

// Metodo PUT
router.put("/:id", (req, res) => {
    const actualizacion = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice > -1) {
        programacion[indice] = actualizacion;
        return res.send("El curso se ha actualizado correctamente");
    }
    res.send(`El curso con id ${id} no existe`);
});

// Metodo PATCH
router.patch("/:id", (req, res) => {
    const cambios = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice > -1) {
        Object.assign(programacion[indice], cambios);
        return res.send("El curso se modifico correctamente");
    }
    res.send(`El curso con id ${id} no existe`);
});

// Metodo DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice > -1) {
        programacion.splice(indice, 1);
        res.send("El curso se ha eliminado correctamente");
    }
    res.send(`El curso con id ${id} no existe`);
});

module.exports.router = router;