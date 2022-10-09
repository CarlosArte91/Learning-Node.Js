const EventEmitter = require("events");

// console.log(EventEmitter);

const nuevoEmisor = new EventEmitter();

// console.log(nuevoEmisor);

const fun = (total, saldo) => {
    console.log(`Se realizó una nueva compra por $${total} USD`);
    console.log(`Tienes un saldo equivalente a ${saldo} USD`);
};

nuevoEmisor.on("compra", fun);

nuevoEmisor.emit("compra", 500, 200);