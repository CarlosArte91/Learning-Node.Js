const cumplimientoPedido = () => {
    return Math.random() < 0.6;
};

const ordenDeCompra = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (cumplimientoPedido()) resolve("Tu pizza va en camino");
        else reject("Ha ocurrido un error");    
    }, 4000);
});

const resolve = (response) => {
    console.log(response);
};

const reject = (error) => {
    console.log(error);
};

ordenDeCompra.then(resolve, reject);