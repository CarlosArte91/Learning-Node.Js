function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Creando orden del producto ${producto}`);
        setTimeout(() => {
            if (producto === "taza") resolve(`Generando orden del producto ${producto}...`);
            else reject(`El producto ${producto} no esta disponible`);
        }, 2000);
    });
};

function procesarOrden(respuesta) {
    return new Promise(resolve => {
        console.log("Procesando respuesta...");
        setTimeout(() => console.log(`La aplicación está "${respuesta}"`), 2000);
        setTimeout(() => resolve("Gracias por su compra"), 4000);
    });
};

// ordenarProducto("taza")
//     .then(respuesta => {
//         return procesarOrden(respuesta);
//     })
//     .then(respuesta => {
//         console.log(respuesta);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        const respuesta2 = await procesarOrden(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.log(error);
    }
};

realizarPedido("lapíz");

