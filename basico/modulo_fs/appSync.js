const fs = require("fs");

console.log("\n>>>Leer archivo\n");
const leer = fs.readFileSync("./files/main.html", "utf-8");
console.log(leer);

console.log("\n\n>>>Renombrar archivo\n");
fs.renameSync("./files/main.html", "./files/index.html");
console.log("Renombrado exitosamente");

console.log("\n\n>>>Agregar texto\n");
fs.appendFileSync("./files/index.html", "\n<div>Esta es una etiquita de contenedor</div>");
const leer2 = fs.readFileSync("./files/index.html", "utf-8");
console.log("Agregado correctamente\n");
console.log(leer2);

console.log("\n\n>>>Modificar contenido completo");
fs.writeFileSync("./files/index.html", "\n<h1>Contenido Nuevo</h1>");
console.log("\nModificado correctamente\n");
const leer3 = fs.readFileSync("./files/index.html", "utf-8");
console.log(leer3);

console.log("\n\n>>>Eliminar archivo");
fs.unlinkSync("./files/index.html");
console.log("\nArchivo eliminado");