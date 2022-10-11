const http = require("http");
const { handleRequestGET } = require("./functions/methodGet.js");


const server = http.createServer((req, res) => {
    const { method } = req;

    switch(method) {
        case "GET":
            return handleRequestGET(req, res);
        // case "POST":
        //     return handleRequestPOST(req, res);
        default:
            console.log(`El metodo ${method} no se puede manejar por el servidor`);
    };
});

const PORT = 3000;
server.listen(PORT, () => console.log("SERVER ON"));