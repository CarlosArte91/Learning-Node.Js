//El atributo arg de process es un arreglo que contiene los argumentos
//que pasemos al momento de la ejecución
//console.log(process.argv[2]);

//Para saber cuanta memoria esta usando el pc podemos utilizar el método memoryUsage
//Esto devolvera un objeto con la información
//console.log(process.memoryUsage());

//Modulo OS sistema operativo
//const os = require("os");

// console.log(os.type());
// console.log(os.homedir());
// console.log(((os.uptime()/60)/60)/24);
// console.log(os.userInfo());

//Modulo Timer

function aumentar(num) {
    console.log(`tu número es ${num}`);
};

//setTimeout(aumentar, 3000, 5);


const sumar = (a, b) => {
    console.log(a + b);
};

//setTimeout(sumar, 3000, 5, 9);

//setImmediate(aumentar, 10);

//setImmediate(sumar, 25, 36);

// function aument(num) {
//     return function () {
//         console.log(num);
//         num+= 10;
//     };    
// };

// const algo = aument(10);

// setInterval(algo, 2000);


