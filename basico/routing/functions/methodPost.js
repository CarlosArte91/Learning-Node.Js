const fs = require("fs");
let id = 5;

const handleRequestPOST = (req, res) => {
    const path = req.url;
    let cuerpo;
    if (path === "/cursos/agregar") {
        req.on("data", contenido => {        
            cuerpo = JSON.parse(contenido.toString());
        });
        req.on("end", () => {
            id++;
            cuerpo.id = id;
            let cursos = require("../cursos.json");
            cursos.push(cuerpo);
            cursos = JSON.stringify(cursos);

            fs.writeFileSync("./cursos.json", cursos);

            res.end(`El curso "${cuerpo.titulo}" se ha creado correctamente`);
        });    
    }
    else res.end("Ruta no encontrada");
};

module.exports.handleRequestPOST = handleRequestPOST;
