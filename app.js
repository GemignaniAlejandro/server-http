const http = require('http');

const server = http.createServer((request, response)=>{
    response.end("Hola");
});

server.listen(8080, function(){
    console.log("El servidor está activo en el puerto: "+ this.address().port);
})