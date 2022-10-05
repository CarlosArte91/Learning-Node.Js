const fs = require("fs");

// fs.readFile("./files/index.html", "utf-8", (err, done) => {
//     // if (err) throw err;
//     // else console.log(done);
//     err ? console.log(err) : console.log(done);
// });

// fs.rename("./files/index.txt", "./files/main.html", (err) => {
//     if (err) throw err;
//     console.log("Nombre modificdo");
// });

// fs.rename("./main.html", "./files/index.txt", (err) => {
//     if (err) throw err;
//     console.log("Nuevamente modificado");
// });

// fs.appendFile("./files/main.html", "\n<p>Hola mundillo</p>", (err) => {
//     if (err) throw err;
//     console.log("archivo actualizado");
// });

fs.writeFile("./files/mian.html", "!    ", (err) => {
    if (err) throw err;
    console.log("Contenido nuevo");
});