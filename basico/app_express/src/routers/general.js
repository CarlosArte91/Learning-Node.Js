const { Router } =require("express");
const router = Router();

const { infoCursos } = require("../assets/cursos.js");

router.get("/", (req, res) => {
    res.send("Bienvenido a mi API de Node y Express 👽 🤟");
});

router.get("/cursos", (req, res) => {
    res.send(infoCursos);
});

module.exports.router = router;