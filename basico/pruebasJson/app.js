const curso = require("./curso.json");

//console.log(curso.temas);

let infoCurso = {
    titulo: "Aprende Node js",
    visitas: 4567,
    likes: 35877,
    temas: [
        "javascript",
        "node js"
    ],
    publico: false
};

//console.log(infoCurso.temas);

let infoCursoJson = JSON.stringify(infoCurso);

//console.log(infoCursoJson);

let cursoObjeto = JSON.parse(infoCursoJson);

cursoObjeto.publico = true;

console.log(cursoObjeto);
