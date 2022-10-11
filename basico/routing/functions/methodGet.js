const cursos = require("../cursos.json");

const handleRequestGET = (req, res) => {
    const path = req.url;
 
    switch(path) {
        case "/":
            res.statusCode = 200;
            res.end("Bienvenido a mi primer servidor y Api creados con Node");
            break;
        case "/cursos":
            res.statusCode = 200;
            res.end(JSON.stringify(cursos));
            break;
        case "/cursos/programacion":
            res.statusCode = 200;
            res.end(JSON.stringify(cursosCategoria("programacion")));
            break;
        default:
            res.statusCode = 404;
            res.end("No se encontro el recurso");
            break;
    };
};

const cursosCategoria = (categoria) => {
    return cursos.filter(curso => curso.categoria === categoria);
};

module.exports.handleRequestGET = handleRequestGET;