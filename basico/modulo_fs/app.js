const fs = require("fs");

fs.readFile("./files/index.html", "utf-8", (err, done) => {
    // if (err) throw err;
    // else console.log(done);
    console.log("1 - Leer archivo");
    err ? console.log(err) : console.log(done);
});

fs.rename("./files/index.html", "./files/main.html", (err) => {
    console.log("2 - Renombrar");
    if (err) throw err;
    console.log("Nombre modificado");
});

// fs.rename("./main.html", "./files/index.txt", (err) => {
//     if (err) throw err;
//     console.log("Nuevamente modificado");
// });

fs.appendFile("./files/main.html", "\n<p>Hola mundillo, esto es una prueba</p>", (err) => {
    console.log("3 - Agregar texto");
    if (err) throw err;
    console.log("Actualizado con exito");
});

fs.writeFile("./files/mian.html", "Reescribiendo el archivo", (err) => {
    console.log("4 - Reescribir");
    if (err) throw err;
    console.log("Contenido nuevo");
});

fs.unlink("./files/mian.html", (err) => {
    console.log("4 - Eliminar");
    if (err) throw err;
    console.log("archivo eliminado");
});

