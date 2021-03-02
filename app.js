const http = require('http');
const PORT = process.env.PORT || 3000;

const getRandomNum = (min, max) => 
{
    return Math.random() * (max-min) + min;
}

const requestListener = (req, res) => 
{
    res.writeHead(200);
    const objetoRes = 
    {
        id: Math.round(getRandomNum(1,10)),
        title: "Producto: " + Math.round(getRandomNum(1,10)),
        price: getRandomNum(0.00,9999.99).toFixed(2),
        thumbnail: "Foto: " + Math.round(getRandomNum(1,10)) 
    }

    res.end(JSON.stringify(objetoRes));
}

const server = http.createServer(requestListener);

server.listen(PORT, function(){
    console.log(`El servidor está en el puerto: ${PORT}`);
})