const { Console } = require('console');
const http =require('http');

const HOSTNAME = 'localhost'
const PORT = 9000

const server = http.createServer((req, res) => {
    if(req.url.startsWith('/tasks')){
        taskRoutes(req, res)
    }
    else{
        res.writeHead(404,'Not Foud',{ 'content-type': 'application/json'})
        res.end(json.stringify({
            meessage: 'sorry, you got'
        }))
    }
});

server.listen(PORT,HOSTNAME, ()=>{
    Console.log('Server running on port ${PORT}')
})