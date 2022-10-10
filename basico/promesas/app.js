const valor = false;

const thePromise = new Promise((resolve, reject) => {
    if (valor) resolve();
    else reject();
});

// console.log(thePromise);

thePromise.then((response) => {
    console.log("ok");
}, (error) => {
    console.log("error");
});