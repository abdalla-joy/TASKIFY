const { Console } = require('console');
const http =require('http');
const taskRoutes = require('./routes/taskRoutes');

const HOSTNAME = 'localhost'
const PORT = 9000

const server = http.createServer((req, res) => {
    if(req.url.startsWith('/tasks')){
        taskRoutesutes(req, res)
    }
    else{
        res.writeHead(404,'Not Foud',{ 'content-type': 'application/json'})
        res.end(JSON.stringify({
            meessage: 'sorry, you got'
        }))
    }
});

server.listen(PORT,HOSTNAME, ()=>{
    console.log(`Server running on port ${PORT}`)
})